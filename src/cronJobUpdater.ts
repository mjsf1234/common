import { configuration} from './cronJobDeployer';
import { CryptoUtils } from './utils';
import { LoggingUtils } from './utils/logging-utils';

async function updateJob(config: any) {
    // [START cloud_scheduler_create_job]
    const scheduler = await import('@google-cloud/scheduler');
  
    // Create a client.
    const client = new scheduler.CloudSchedulerClient();
  
    // TODO(developer): Uncomment and set the following variables
    const projectId = process.env.GCP_PROJECTID as string;
    const locationId = process.env.GCP_LOCATIONID as string;
    const url = process.env.GCP_TARGET_URL as string;
    const env = process.env.NODE_ENV as string;
    const apiKey = process.env.GCP_CRON_API_KEY as string;
    const jobName = `projects/${projectId}/locations/${locationId}/jobs/${config.name}-${env}`;
  
    // Construct the fully qualified location path.
    const parent = client.locationPath(projectId, locationId);
  
    // Construct the request body.
    const job = {
      name: jobName,
      httpTarget: {
        uri: `${url}${config.path}`,
        httpMethod: 'POST',
        headers: {'CRON-API-KEY': apiKey},
        body: Buffer.from(CryptoUtils.encrypt(JSON.stringify(config.body)))
      },
      schedule: config.cron,
      timeZone: 'Asia/Calcutta'
    };
  
    const request: any = {
      parent: parent,
      job: job
    };
  
    // Use the client to send the job creation request.
    client
      .getJob({name: jobName})
      .then(async data => {
        LoggingUtils.info(`Job Exist ?  ${data[0].name}`);
        const [response] = await client.updateJob(request);
        LoggingUtils.info(`Updated existing job ${data[0].name}`);
      })
      .catch(error => {
        LoggingUtils.error(`Job not found ? , ${error.message}`);
      })
      .finally(async () => {
        const [response] = await client.createJob(request);
        LoggingUtils.info(`Created job: ${response.name}`);
      });
  }


configuration.forEach(config => {
    updateJob(config).catch(err => {
      LoggingUtils.error(err);
      process.exitCode = 1;
    });
  });
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cronJobDeployer_1 = require("./cronJobDeployer");
const utils_1 = require("./utils");
const logging_utils_1 = require("./utils/logging-utils");
async function updateJob(config) {
    // [START cloud_scheduler_create_job]
    const scheduler = await Promise.resolve().then(() => __importStar(require('@google-cloud/scheduler')));
    // Create a client.
    const client = new scheduler.CloudSchedulerClient();
    // TODO(developer): Uncomment and set the following variables
    const projectId = process.env.GCP_PROJECTID;
    const locationId = process.env.GCP_LOCATIONID;
    const url = process.env.GCP_TARGET_URL;
    const env = process.env.NODE_ENV;
    const apiKey = process.env.GCP_CRON_API_KEY;
    const jobName = `projects/${projectId}/locations/${locationId}/jobs/${config.name}-${env}`;
    // Construct the fully qualified location path.
    const parent = client.locationPath(projectId, locationId);
    // Construct the request body.
    const job = {
        name: jobName,
        httpTarget: {
            uri: `${url}${config.path}`,
            httpMethod: 'POST',
            headers: { 'CRON-API-KEY': apiKey },
            body: Buffer.from(utils_1.CryptoUtils.encrypt(JSON.stringify(config.body)))
        },
        schedule: config.cron,
        timeZone: 'Asia/Calcutta'
    };
    const request = {
        parent: parent,
        job: job
    };
    // Use the client to send the job creation request.
    client
        .getJob({ name: jobName })
        .then(async (data) => {
        logging_utils_1.LoggingUtils.info(`Job Exist ?  ${data[0].name}`);
        const [response] = await client.updateJob(request);
        logging_utils_1.LoggingUtils.info(`Updated existing job ${data[0].name}`);
    })
        .catch(error => {
        logging_utils_1.LoggingUtils.error(`Job not found ? , ${error.message}`);
    })
        .finally(async () => {
        const [response] = await client.createJob(request);
        logging_utils_1.LoggingUtils.info(`Created job: ${response.name}`);
    });
}
cronJobDeployer_1.configuration.forEach(config => {
    updateJob(config).catch(err => {
        logging_utils_1.LoggingUtils.error(err);
        process.exitCode = 1;
    });
});
//# sourceMappingURL=cronJobUpdater.js.map
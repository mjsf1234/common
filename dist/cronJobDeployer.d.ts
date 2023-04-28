/**
 * Cron job configurations
 */
export declare const configuration: {
    name: string;
    path: string;
    body: {
        cronJobName: string;
        eventType: string;
    };
    cron: string;
}[];

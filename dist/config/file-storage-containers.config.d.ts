export declare abstract class FileStorageContainerConfig {
    static containers: {
        casStatements: {
            name: string;
        };
        reversefeed: {
            name: string;
        };
        signatures: {
            name: string;
        };
        pancards: {
            name: string;
        };
        profilepictures: {
            name: string;
        };
        cheques: {
            name: string;
        };
        aof: {
            name: string;
        };
        txnfeedkarvy: {
            name: string;
        };
        txnfeedcams: {
            name: string;
        };
        fatca: {
            name: string;
        };
        paymentconfirmationreports: {
            name: string;
        };
        rtaholding: {
            name: string;
        };
        rtaZipDoc: {
            name: string;
        };
        kyc: {
            name: string;
        };
        relationshipdocuments: {
            name: string;
        };
        foliodata: {
            name: string;
        };
        folioaudittrail: {
            name: string;
        };
        instrumentsexportfile: {
            name: string;
        };
        nomineedoc: {
            name: string;
        };
        reversefeedreconciliation: {
            name: string;
        };
        rtareconciliation: {
            name: string;
        };
    };
    static getGcpContainerName(containerName: string): string;
}

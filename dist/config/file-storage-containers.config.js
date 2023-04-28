"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageContainerConfig = void 0;
class FileStorageContainerConfig {
    static getGcpContainerName(containerName) {
        var _a;
        return process.env.ENV_TYPE == 'GKE' ? (_a = process.env['STORAGE_CONTAINER_' + containerName.toUpperCase()]) !== null && _a !== void 0 ? _a : containerName : containerName;
    }
}
exports.FileStorageContainerConfig = FileStorageContainerConfig;
FileStorageContainerConfig.containers = {
    casStatements: {
        name: 'casstatements'
    },
    reversefeed: {
        name: 'reversefeed'
    },
    signatures: {
        name: 'signatures'
    },
    pancards: {
        name: 'pancards'
    },
    profilepictures: {
        name: 'profilepictures'
    },
    cheques: {
        name: 'cheques'
    },
    aof: {
        name: 'aof'
    },
    txnfeedkarvy: {
        name: 'txnfeedkarvy'
    },
    txnfeedcams: {
        name: 'txnfeedcams'
    },
    fatca: {
        name: 'fatca'
    },
    paymentconfirmationreports: {
        name: 'paymentconfirmationreports'
    },
    rtaholding: {
        name: 'rtaholding'
    },
    rtaZipDoc: {
        name: 'rtaZipDoc'
    },
    kyc: {
        name: 'kyc'
    },
    relationshipdocuments: {
        name: 'relationshipdocuments'
    },
    foliodata: {
        name: 'foliodata'
    },
    folioaudittrail: {
        name: 'folioaudittrail'
    },
    instrumentsexportfile: {
        name: 'instrumentsexportfile'
    },
    nomineedoc: {
        name: 'nomineedoc'
    },
    reversefeedreconciliation: {
        name: 'reversefeedreconciliation'
    },
    rtareconciliation: {
        name: 'rtareconciliation'
    }
};
//# sourceMappingURL=file-storage-containers.config.js.map
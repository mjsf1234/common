export abstract class FileStorageContainerConfig {
  static containers = {
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
    kyc:{
      name:'kyc'
    },
    relationshipdocuments:{
      name:'relationshipdocuments'
    },
    foliodata:{
      name:'foliodata'
    },
    folioaudittrail:{
      name:'folioaudittrail'
    },
    instrumentsexportfile: {
      name:'instrumentsexportfile'
    },
    nomineedoc:{
      name:'nomineedoc'
    },
    reversefeedreconciliation: {
      name:'reversefeedreconciliation'
    },
    rtareconciliation: {
      name:'rtareconciliation'
    }
  };

  static getGcpContainerName(containerName:string){
      return process.env.ENV_TYPE == 'GKE' ? process.env['STORAGE_CONTAINER_' + containerName.toUpperCase()] ?? containerName : containerName;
  }

}

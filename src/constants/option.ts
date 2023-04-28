export abstract class Option {
  static readonly GLOBALOPTIONS: any = {
    ADVISORYCUSTOMERFLAG: {
      ADVISORY: {
        value: 1,
        label: 'Advisory',
        sequence: 1
      },
      DISCRETIONARY: {
        value: 2,
        label: 'Discretionary',
        sequence: 2
      }
    },
    GUARDIANRELATIONSHIP: {
      father: {
        value: 1,
        label: 'FATHER'
      },
      mother: {
        value: 2,
        label: 'MOTHER'
      },
      guardian: {
        value: 15,
        label: 'GUARDIAN'
      }
    },
    BUSINESSDAY: {
      WorkingDay: {
        value: 1,
        label: 'Working Day',
        sequence: 1
      },
      Holiday: {
        value: 0,
        label: 'Holiday',
        sequence: 0
      }
    },
    CLIENTHIERARCHYLEVEL: {
      group: {
        value: 1,
        label: 'Group',
        sequence: 1
      },
      family: {
        value: 2,
        label: 'Family',
        sequence: 2
      },
      client: {
        value: 3,
        label: 'Client',
        sequence: 3
      },
      account: {
        value: 4,
        label: 'Account',
        sequence: 4
      }
    },
    NOTIFICATIONMEDIUMTYPE: {
      email: {
        value: 1,
        label: 'Email',
        sequence: 1
      },
      sms: {
        value: 2,
        label: 'SMS',
        sequence: 2
      },
      push: {
        value: 3,
        label: 'PUSH',
        sequence: 3
      }
    },
    ASSETTYPE: {
      asset: {
        value: 1,
        label: 'Asset',
        sequence: 1
      },
      liablity: {
        value: 2,
        label: 'Liablity',
        sequence: 2
      }
    },
    CRONSTATUS: {
      started: {
        value: 1,
        label: 'Started',
        sequence: 1
      },
      finished: {
        value: 2,
        label: 'Finished',
        sequence: 2
      },
      errored: {
        value: 3,
        label: 'Errored',
        sequence: 3
      },
      skipped: {
        value: 4,
        label: 'Skipped',
        sequence: 4
      }
    },
    HEALTHCHECKERSTATUS: {
      healthy: {
        value: 1,
        label: 'Healthy',
        sequence: 1
      },
      unhealthy: {
        value: 2,
        label: 'Unhealthy',
        sequence: 2
      },
      errored: {
        value: 3,
        label: 'Errored',
        sequence: 3
      }
    },
    GENDER: {
      male: {
        value: 1,
        label: 'Male',
        sequence: 1
      },
      female: {
        value: 2,
        label: 'Female',
        sequence: 2
      },
      other: {
        value: 3,
        label: 'Other',
        sequence: 3
      },
      transgender: {
        value: 4,
        label: 'Transgender',
        sequence: 4
      }
    },
    GOALTYPE: {
      unclassified: {
        value: 1,
        label: 'Unclassified',
        sequence: 1,
        icon: 'fa-shield'
      },
      car: {
        value: 2,
        label: 'Dream Car',
        sequence: 2,
        icon: 'fa-car'
      },
      home: {
        value: 3,
        label: 'Dream Home',
        sequence: 3,
        icon: 'fa-home'
      },
      education: {
        value: 4,
        label: 'Study Abroad',
        sequence: 4,
        icon: 'fa-graduation-cap'
      },
      retirement: {
        value: 5,
        label: 'Golden Years',
        sequence: 5,
        icon: 'fa-briefcase'
      },
      marriage: {
        value: 6,
        label: 'Ideal Wedding',
        sequence: 6,
        icon: 'fa-fire'
      },
      holiday: {
        value: 7,
        label: 'Exotic Vacation',
        sequence: 7,
        icon: 'fa-plane'
      },
      wealth: {
        value: 8,
        label: 'Wealth Creation',
        sequence: 8,
        icon: 'fa-diamond'
      },
      taxSaving: {
        value: 9,
        label: 'TaxSaving',
        sequence: 9,
        icon: 'fa-shield'
      },
      others: {
        value: 10,
        label: 'Customised Goal',
        sequence: 10,
        icon: 'fa-dot-circle-o'
      }
    },
    INVESTMENTTYPE: {
      sip: {
        value: 1,
        label: 'SIP',
        sequence: 1
      },
      lumpsum: {
        value: 2,
        label: 'Lumpsum',
        sequence: 2
      },
      siplumpsum: {
        value: 3,
        label: 'SIP & Lumpsum',
        sequence: 3
      }
    },
    MANDATESTATUS: {
      pendingImageUpload: {
        value: 1,
        label: 'Scanned Image Upload Pending',
        sequence: 1
      },
      inProcess: {
        value: 2,
        label: 'Registration In Process',
        sequence: 2
      },
      registered: {
        value: 3,
        label: 'Approved',
        sequence: 3
      },
      revoked: {
        value: 4,
        label: 'Revoked',
        sequence: 4
      },
      expired: {
        value: 5,
        label: 'Expired',
        sequence: 5
      },
      rejected: {
        value: 6,
        label: 'Rejected',
        sequence: 6
      },
      cancelled: {
        value: 7,
        label: 'Cancelled',
        sequence: 7
      },
      pendingRegistration: {
        value: 8,
        label: 'Registration Pending',
        sequence: 8
      },
      yetToDownload: {
        value: 9,
        label: 'Yet To Download',
        sequence: 9
      }
    },
    ACCOUNTSTATUS: {
      pendingRegistration: {
        value: 1,
        label: 'Registration Pending',
        sequence: 1
      },
      active: {
        value: 2,
        label: 'Active',
        sequence: 2
      },
      blocked: {
        value: 3,
        label: 'Blocked',
        sequence: 3
      },
      suspended: {
        value: 4,
        label: 'Suspended',
        sequence: 4
      },
      activeWithoutMFKYC: {
        value: 5,
        label: 'Active without MF KYC',
        sequence: 5
      }
    },
    APPUSERSTATUS: {
      registrationInitiated: {
        value: 1,
        label: 'Onboarding Initiated',
        currentState: []
      },
      NTBUser: {
        value: 2,
        label: 'NTB User',
        currentState: ['registrationInitiated', 'singleCustomerID', 'multipleCustomerID', 'NTBUser']
      },
      singleCustomerID: {
        value: 3,
        label: 'ETB User - Single Cust ID',
        currentState: ['registrationInitiated', 'NTBUser']
      },
      multipleCustomerID: {
        value: 4,
        label: 'ETB User - Multiple Cust ID',
        currentState: ['registrationInitiated', 'NTBUser']
      },
      advisoryUser: {
        value: 5,
        label: 'Advisory User',
        currentState: ['singleCustomerID', 'IDCOMVerified']
      },
      wealthfyDomesticUser: {
        value: 6,
        label: 'Existing Wealth User',
        currentState: ['singleCustomerID', 'IDCOMVerified']
      },
      IDCOMVerified: {
        value: 7,
        label: 'Second Factor Verified',
        currentState: ['singleCustomerID', 'multipleCustomerID']
      },
      PINSetupCompleted: {
        value: 8,
        label: 'M-PIN Setup',
        currentState: ['NTBUser', 'IDCOMVerified']
      },
      bankAccountIsReady: {
        value: 9,
        label: 'Bank Account Linked',
        currentState: ['PINSetupCompleted', 'IDCOMVerified']
      },
      FATCAReady: {
        value: 10,
        label: 'FATCA Setup',
        currentState: ['bankAccountIsReady', 'PINSetupCompleted']
      },
      declarationCompleted: {
        value: 26,
        label: 'Contact Declaration Completed',
        currentState: ['FATCAReady']
      },
      nomineeCompleted: {
        value: 11,
        label: 'Nominee Setup',
        currentState: ['declarationCompleted']
      },
      investmentAccountReady: {
        value: 12,
        label: 'Investment Account Created',
        currentState: ['nomineeCompleted']
      },
      userRegistered: {
        value: 13,
        label: 'Onboarding Completed',
        currentState: ['investmentAccountReady']
      },
      nomineeUserStatus: {
        value: 14,
        label: 'Nominee User Status'
      },
      KYCPending: {
        value: 15,
        label: 'MF KYC Pending',
        currentState: ['investmentAccountReady']
      },
      KYCRegistered: {
        value: 16,
        label: 'MF KYC Registered',
        currentState: ['investmentAccountReady']
      },
      blocked: {
        value: 17,
        label: 'Blocked'
      },
      pendingRegistration: {
        value: 18,
        label: 'Registration Pending'
      },
      active: {
        value: 19,
        label: 'Active'
      },
      inactive: {
        value: 20,
        label: 'Inactive'
      },
      deleted: {
        value: 21,
        label: 'Deleted'
      },
      suspended: {
        value: 22,
        label: 'Dormant' // FOR HDFC ENV - Suspended is Dormant
      },
      locked: {
        value: 23,
        label: 'Locked'
      },
      disabled: {
        value: 24,
        label: 'Disabled'
      },
      dormant: {
        value: 25,
        label: 'Dormant'
      }
    },
    INSTRUMENTSTATUS: {
      active: {
        value: 1,
        label: 'Active',
        sequence: 1
      },
      archieved: {
        value: 2,
        label: 'Archieved',
        sequence: 2
      },
      disabled: {
        value: 3,
        label: 'Disabled',
        sequence: 3
      },
      suspended: {
        value: 4,
        label: 'Suspended',
        sequence: 4
      }
    },
    SYSTEMATICMETHODTYPE: {
      sip: {
        value: 1,
        label: 'SIP',
        sequence: 1
      },
      stp: {
        value: 2,
        label: 'STP',
        sequence: 2
      },
      swp: {
        value: 3,
        label: 'SWP',
        sequence: 3
      }
    },
    BSEPURCHASETYPE: {
      fresh: {
        value: 1,
        label: 'Buy',
        sequence: 1
      },
      additional: {
        value: 2,
        label: 'Buy',
        sequence: 2
      }
    },
    BSEREDEMPTIONTYPE: {
      partial: {
        value: 1,
        label: 'Redemption',
        sequence: 1
      },
      complete: {
        value: 2,
        label: 'Redemption',
        sequence: 2
      }
    },
    FIRSTORDERFLAG: {
      partial: {
        value: 1,
        label: 'Y',
        sequence: 1
      },
      complete: {
        value: 2,
        label: 'N',
        sequence: 2
      }
    },
    SYSTEMATICMETHODSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      active: {
        value: 2,
        label: 'Active',
        sequence: 2
      },
      paused: {
        value: 3,
        label: 'Paused',
        sequence: 3
      },
      ended: {
        value: 4,
        label: 'Expired',
        sequence: 4
      },
      cancelled: {
        value: 5,
        label: 'Cancelled',
        sequence: 5
      },
      failed: {
        value: 6,
        label: 'Failed',
        sequence: 6
      },
      stopped: {
        value: 7,
        label: 'Stopped',
        sequence: 7
      }
    },
    KYCSTATUS: {
      pending: {
        value: 1,
        label: 'MF KYC Pending',
        sequence: 1
      },
      notRequired: {
        value: 2,
        label: 'Not Required',
        sequence: 2
      },
      done: {
        value: 3,
        label: 'MF KYC Registered',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      },
      inProgress: {
        value: 5,
        label: 'In Progress',
        sequence: 5
      },
      hold: {
        value: 6,
        label: 'MF KYC On Hold',
        sequence: 6
      },
      incomplete: {
        value: 7,
        label: 'MF KYC Incomplete',
        sequence: 7
      }
    },
    FATCAREGISTRATIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      generated: {
        value: 2,
        label: 'Generated',
        sequence: 2
      },
      done: {
        value: 3,
        label: 'Done',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      }
    },
    SYSTEMATICMETHODFREQUENCY: {
      daily: {
        value: 1,
        label: 'Daily',
        vrCode: 'Daily',
        convertToMonthlyFactorNum: 20,
        convertToMonthlyFactorDen: 1,
        sequence: 1
      },
      weekly: {
        value: 2,
        label: 'Weekly',
        vrCode: 'Weekly',
        convertToMonthlyFactorNum: 4,
        convertToMonthlyFactorDen: 1,
        sequence: 2
      },
      biweekly: {
        value: 3,
        label: 'BiWeekly',
        vrCode: 'BiWeekly',
        convertToMonthlyFactorNum: 8,
        convertToMonthlyFactorDen: 1,
        sequence: 3
      },
      monthly: {
        value: 4,
        label: 'Monthly',
        vrCode: 'Monthly',
        convertToMonthlyFactorNum: 1,
        convertToMonthlyFactorDen: 1,
        sequence: 4
      },
      quarterly: {
        value: 5,
        label: 'Quarterly',
        vrCode: 'Quarterly',
        convertToMonthlyFactorNum: 1,
        convertToMonthlyFactorDen: 3,
        sequence: 5
      },
      semiannually: {
        value: 6,
        label: 'Semi Annually',
        vrCode: 'Half-Yearly',
        convertToMonthlyFactorNum: 1,
        convertToMonthlyFactorDen: 6,
        sequence: 6
      },
      annually: {
        value: 7,
        label: 'Annually',
        vrCode: 'Annual',
        convertToMonthlyFactorNum: 1,
        convertToMonthlyFactorDen: 12,
        sequence: 7
      },
      oneTime: {
        value: 8,
        label: 'One Time',
        vrCode: 'One Time',
        convertToMonthlyFactorNum: 1,
        convertToMonthlyFactorDen: 1,
        sequence: 8
      },
      fortNightly: {
        value: 9,
        label: 'FortNightly',
        vrCode: 'FortNightly',
        convertToMonthlyFactorNum: 2,
        convertToMonthlyFactorDen: 1,
        sequence: 9
      },
      irregular: {
        value: 10,
        label: 'Irregular',
        vrCode: 'Irregular',
        convertToMonthlyFactorNum: 1,
        convertToMonthlyFactorDen: 1,
        sequence: 10
      },
      bimonthly: {
        value: 11,
        label: 'Bimonthly',
        vrCode: 'Bimonthly',
        convertToMonthlyFactorNum: 2,
        convertToMonthlyFactorDen: 1,
        sequence: 11
      }
    },
    SERVICEPROVIDERTYPE: {
      assetManagementCompnay: {
        value: 1,
        label: 'Asset Management Compnay',
        sequence: 1
      },
      depositoryParticipant: {
        value: 2,
        label: 'Depository Participant',
        sequence: 2
      },
      pmsIssuer: {
        value: 3,
        label: 'PMS Issuer',
        sequence: 3
      },
      insuranceIssuer: {
        value: 4,
        label: 'Insurance Issuer',
        sequence: 4
      },
      fdIssuer: {
        value: 5,
        label: 'FD Issuer',
        sequence: 5
      },
      miscIssuer: {
        value: 6,
        label: 'Miscellaneous Issuer',
        sequence: 6
      }
    },
    SERVICEPROVIDERACCOUNTTYPE: {
      folio: {
        value: 1,
        label: 'Folio',
        sequence: 1
      },
      demat: {
        value: 2,
        label: 'Demat',
        sequence: 2
      },
      pmsAccount: {
        value: 3,
        label: 'PMS Account',
        sequence: 3
      },
      insuranceAccount: {
        value: 4,
        label: 'Insurance Account',
        sequence: 4
      },
      fdAccount: {
        value: 5,
        label: 'FD Account',
        sequence: 5
      },
      others: {
        value: 5,
        label: 'Others',
        sequence: 5
      }
    },
    SERVICEPROVIDERSTATUS: {
      active: {
        value: 1,
        label: 'Active',
        sequence: 1
      },
      blocked: {
        value: 2,
        label: 'Blocked',
        sequence: 2
      }
    },
    SERVICEPROVIDERACCOUNTRECONCILIATIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      unreconciled: {
        value: 2,
        label: 'Unreconciled',
        sequence: 2
      },
      reconciled: {
        value: 3,
        label: 'Reconciled',
        sequence: 3
      }
    },
    PAYMENTSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      successful: {
        value: 2,
        label: 'Successful',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      },
      cancelledByUser: {
        value: 4,
        label: 'Cancelled by User',
        sequence: 4
      },
      cancelledByGateway: {
        value: 5,
        label: 'Cancelled by Gateway',
        sequence: 5
      },
      created: {
        value: 6,
        label: 'Created',
        sequence: 6
      },
      authorized: {
        value: 7,
        label: 'Authorized',
        sequence: 7
      },
      captured: {
        value: 8,
        label: 'Captured',
        sequence: 8
      },
      fundsTransfered: {
        value: 9,
        label: 'Funds Transfered',
        sequence: 9
      },
      fundsTransferFailed: {
        value: 10,
        label: 'Funds Transfered Failed',
        sequence: 10
      },
      fundsSettled: {
        value: 11,
        label: 'Funds Settled',
        sequence: 11
      },
      sentToPG: {
        value: 12,
        label: 'Sent To Payment Gateway',
        sequence: 12
      },
      reversed: {
        value: 13,
        label: 'Reversed',
        sequence: 13
      }
    },
    PAYMENTMODE: {
      netBanking: {
        value: 1,
        label: 'Net Banking',
        rpLabel: 'netbanking',
        sequence: 1
      },
      upi: {
        value: 2,
        label: 'UPI',
        rpLabel: 'upi',
        sequence: 2
      },
      neftOrRtgs: {
        value: 3,
        label: 'NEFT/RTGS',
        sequence: 3
      },
      mandate: {
        value: 4,
        label: 'Mandate',
        sequence: 4
      },
      cheque: {
        value: 5,
        label: 'Cheque',
        sequence: 5
      },
      cash: {
        value: 6,
        label: 'Cash',
        sequence: 6
      },
      directDebit: {
        value: 7,
        label: 'Direct Debit',
        sequence: 7
      }
    },
    SCHEMEENDTYPE: {
      openEnded: {
        value: 1,
        label: 'OpenEnded',
        sequence: 1
      },
      closeEnded: {
        value: 2,
        label: 'Close Ended',
        sequence: 2
      }
    },
    RISKPROFILEQUESTIONTYPE: {
      single: {
        value: 1,
        label: 'Single Select',
        sequence: 1
      },
      multi: {
        value: 2,
        label: 'Multi Select',
        sequence: 2
      }
    },
    HOLDINGCALCULATIONBUYSELLTYPE: {
      buy: {
        value: 1,
        label: 'Buy',
        sequence: 1
      },
      sell: {
        value: 2,
        label: 'Sell',
        sequence: 2
      },
      others: {
        value: 3,
        label: 'Others',
        sequence: 3
      }
    },
    MUTUALFUNDPLANTYPE: {
      regular: {
        value: 1,
        label: 'Regular',
        sequence: 1
      },
      direct: {
        value: 2,
        label: 'Direct',
        sequence: 2
      }
    },
    MODEOFTRANSACTION: {
      buy: {
        value: 1,
        label: 'Buy',
        sequence: 1
      },
      sell: {
        value: 2,
        label: 'Sell',
        sequence: 2
      },
      switch: {
        value: 3,
        label: 'Switch',
        sequence: 3
      }
    },
    TRANSACTIONSTATUS: {
      pending: {
        value: 1,
        label: 'Initiated',
        sequence: 1
      },
      processing: {
        value: 2,
        label: 'Sent to AMC',
        sequence: 2
      },
      successful: {
        value: 3,
        label: 'Confirmed',
        sequence: 3
      },
      rejected: {
        value: 4,
        label: 'Cancelled',
        sequence: 4
      },
      rejectedByAMC: {
        value: 5,
        label: 'Cancelled by AMC',
        sequence: 5
      },
      cancelledByUser: {
        value: 6,
        label: 'Cancelled',
        sequence: 6
      },
      cancelledByRM: {
        value: 7,
        label: 'Cancelled by Relationship Manager',
        sequence: 7
      },
      cancelledByOperations: {
        value: 8,
        label: 'Failed',
        sequence: 8
      },
      failed: {
        value: 9,
        label: 'Failed',
        sequence: 9
      },
      inProgress: {
        value: 10,
        label: 'In Progress',
        sequence: 10
      }
    },
    ORDERITEMCUSTOMERSTATUS: {
      //specially meant for the displaying on customer portal
      incomplete: {
        value: 1,
        label: 'Initiated', //these are tried doing transactions
        sequence: 1
      },
      pending: {
        value: 2,
        label: 'Initiated',
        sequence: 2
      },
      paymentPending: {
        value: 3,
        label: 'Initiated',
        sequence: 3
      },
      paymentInitiated: {
        value: 4,
        label: 'Initiated',
        sequence: 4
      },
      paymentProcessing: {
        value: 5,
        label: 'Initiated',
        sequence: 5
      },
      paymentSuccessful: {
        value: 6,
        label: 'In Progress',
        sequence: 6
      },
      processing: {
        value: 7,
        label: 'Sent to AMC',
        sequence: 7
      },
      successful: {
        value: 8,
        label: 'Confirmed',
        sequence: 8
      },
      failed: {
        value: 9,
        label: 'Failed',
        sequence: 9
      }
    },
    TRANSACTIONFEEDSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      processing: {
        value: 2,
        label: 'Processing',
        sequence: 2
      },
      successful: {
        value: 3,
        label: 'Successful',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      }
    },
    PAYMENTGATEWAYSTATUS: {
      active: {
        value: 1,
        label: 'Active',
        sequence: 1
      },
      down: {
        value: 2,
        label: 'Down',
        sequence: 2
      },
      halted: {
        value: 3,
        label: 'Halted',
        sequence: 3
      },
      failing: {
        value: 4,
        label: 'Failing',
        sequence: 4
      }
    },
    TRANSACTIONSUBTYPE: {
      normal: {
        value: 1,
        label: 'Normal',
        sequence: 1
      },
      systematic: {
        value: 2,
        label: 'Systematic',
        sequence: 2
      }
    },
    REVERSEFEEDSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      processing: {
        value: 2,
        label: 'Processing',
        sequence: 2
      },
      successful: {
        value: 3,
        label: 'Successful',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      }
    },
    AUDITTRAILSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      processing: {
        value: 2,
        label: 'Processing',
        sequence: 2
      },
      successful: {
        value: 3,
        label: 'Successful',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      }
    },
    REVERSEFEEDRECONCILIATIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      unreconciled: {
        value: 2,
        label: 'Unreconciled',
        sequence: 2
      },
      reconciled: {
        value: 3,
        label: 'Reconciled',
        sequence: 3
      }
    },
    REGISTRATIONSTEP: {
      openAccount: {
        value: 1,
        label: 'Open Account',
        sequence: 1
      },
      investorInfo: {
        value: 2,
        label: 'Investor Info',
        sequence: 2
      },
      nominee: {
        value: 3,
        label: 'Nominee',
        sequence: 3
      },
      regulatoryInfo: {
        value: 4,
        label: 'Regulatory INfo',
        sequence: 4
      },
      bankDetails: {
        value: 5,
        label: 'Bank Details',
        sequence: 5
      }
    },
    MUTUALFUNDTYPE: {
      balanced: {
        value: 1,
        label: 'Balanced',
        sequence: 1
      },
      bond: {
        value: 2,
        label: 'Bond',
        sequence: 2
      },
      debt: {
        value: 3,
        label: 'Debt',
        sequence: 3
      },
      elss: {
        value: 4,
        label: 'ELSS',
        sequence: 4
      },
      equity: {
        value: 5,
        label: 'Equity',
        sequence: 5
      },
      fof: {
        value: 6,
        label: 'FoF',
        sequence: 6
      },
      gilt: {
        value: 7,
        label: 'Gilt',
        sequence: 7
      },
      bybrid: {
        value: 8,
        label: 'Hybrid',
        sequence: 8
      },
      income: {
        value: 9,
        label: 'Income',
        sequence: 9
      },
      liquid: {
        value: 10,
        label: 'Liquid',
        sequence: 10
      },
      mip: {
        value: 11,
        label: 'MIP',
        sequence: 11
      },
      stp: {
        value: 12,
        label: 'STP',
        sequence: 12
      }
    },
    ACCRUALFREQUENCY: {
      na: {
        value: 1,
        label: 'NA',
        sequence: 1
      },
      daily: {
        value: 2,
        label: 'Daily',
        sequence: 2
      },
      monthly: {
        value: 3,
        label: 'Monthly',
        sequence: 3
      },
      quarterly: {
        value: 4,
        label: 'Quarterly',
        sequence: 4
      },
      semiannually: {
        value: 5,
        label: 'Semi Annually',
        sequence: 5
      },
      annually: {
        value: 1,
        label: 'Annually',
        sequence: 1
      }
    },
    MUTUALFUNDENDTYPE: {
      open: {
        value: 1,
        label: 'Open',
        sequence: 1
      },
      close: {
        value: 2,
        label: 'Close',
        sequence: 2
      }
    },
    BULKUPLOADTYPE: {
      product: {
        value: 1,
        label: 'Product',
        sequence: 1
      },
      asset: {
        value: 2,
        label: 'Asset',
        sequence: 2
      },
      capitalBucket: {
        value: 3,
        label: 'Capital Bucket',
        sequence: 3
      },
      sectorClassification: {
        value: 4,
        label: 'Sector Classification',
        sequence: 4
      },
      ratingClassification: {
        value: 5,
        label: 'Rating Classification',
        sequence: 5
      },
      instrument: {
        value: 6,
        label: 'Instrument',
        sequence: 6
      },
      modelPortfolioProduct: {
        value: 7,
        label: 'Model Portfolio Product',
        sequence: 7
      },
      modelPortfolioAsset: {
        value: 8,
        label: 'Model Portfolio Asset',
        sequence: 8
      },
      modelPortfolioInstrument: {
        value: 9,
        label: 'Model Portfolio Instrument',
        sequence: 9
      },
      holding: {
        value: 10,
        label: 'Holding',
        sequence: 10
      },
      transaction: {
        value: 11,
        label: 'Transaction',
        sequence: 11
      },
      instrumentSectorMapping: {
        value: 12,
        label: 'Instrument Sector Mapping',
        sequence: 12
      },
      instrumentRatingMapping: {
        value: 13,
        label: 'Instrument Rating Mapping',
        sequence: 13
      },
      instrumentPrice: {
        value: 14,
        label: 'Instrument Price',
        sequence: 14
      },
      prospect: {
        value: 15,
        label: 'Prospect',
        sequence: 15
      },
      underlyingHolding: {
        value: 16,
        label: 'Underlying Holding',
        sequence: 16
      },
      businessCalendar: {
        value: 17,
        label: 'Business Calendar',
        sequence: 17
      },
      serviceProvider: {
        value: 18,
        label: 'Service Provider',
        sequence: 18
      },
      assetClassification: {
        value: 19,
        label: 'Asset Classification',
        sequence: 19
      },
      offlineAccount: {
        value: 20,
        label: 'Offline Account',
        sequence: 20
      }
    },
    GOALOBJECTIVE: {
      goalPlanning: {
        value: 1,
        label: 'Goal Planning',
        sequence: 1
      }
    },
    PRODUCTOBJECTIVE: {
      multiProduct: {
        value: 1,
        label: 'Multi Product',
        sequence: 1
      },
      product: {
        value: 2,
        label: 'Product',
        sequence: 2
      }
    },
    BULKUPLOADFILEPROCESSINGSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      success: {
        value: 2,
        label: 'Successful',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      }
    },
    ORDERCHECKERSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      approved: {
        value: 2,
        label: 'Approved',
        sequence: 2
      },
      rejected: {
        value: 3,
        label: 'Rejected',
        sequence: 3
      },
      discarded: {
        value: 4,
        label: 'Discarded',
        sequence: 4
      }
    },
    INSTRUMENTUNITIZEDFLAG: {
      productDefault: {
        value: 1,
        label: 'Product Default',
        sequence: 1
      },
      unitized: {
        value: 2,
        label: 'Unitized',
        sequence: 2
      },
      nonUnitized: {
        value: 3,
        label: 'Non Unitized',
        sequence: 3
      }
    },
    PGTRANSACTIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      success: {
        value: 2,
        label: 'Success',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      }
    },
    PORTFOLIORECOMMENDATION: {
      recommendation: {
        value: 1,
        label: 'Recommendation',
        sequence: 1
      },
      diy: {
        value: 2,
        label: 'Diy',
        sequence: 2
      },
      partial: {
        value: 3,
        label: 'Partial',
        sequence: 3
      }
    },
    GOALINVESTMENTTYPE: {
      recommended: {
        value: 1,
        label: 'Recommended',
        sequence: 1
      },
      modifiedrecommended: {
        value: 2,
        label: 'Modified Recommended',
        sequence: 2
      },
      diy: {
        value: 3,
        label: 'DIY',
        sequence: 3
      }
    },
    PAYMENTDETAIL: {
      column1: {
        value: 1,
        label: 'PgResponse/RpOrderId',
        sequence: 1
      },
      column2: {
        value: 2,
        label: 'CheckSumSent/RpPaymentId',
        sequence: 2
      },
      column3: {
        value: 3,
        label: 'CheckSumReceived/PaymentSignature',
        sequence: 3
      }
    },
    BENCHMARKINSTRUMENT: {
      nifty50: {
        value: 1,
        label: 'Nifty 50',
        sequence: 1
      },
      sensex: {
        value: 2,
        label: 'Sensex',
        sequence: 2
      },
      ccil: {
        value: 3,
        label: 'CCIL',
        sequence: 3
      }
    },
    RAZORPAYTOKENSTATUS: {
      confirmed: {
        value: 1,
        label: 'Confirmed',
        sequence: 1
      },
      rejected: {
        value: 2,
        label: 'Rejected',
        sequence: 2
      }
    },
    RAZORPAYORDERSTATUS: {
      created: {
        value: 1,
        label: 'Created',
        sequence: 1
      },
      failed: {
        value: 2,
        label: 'Failed',
        sequence: 2
      }
    },
    SIGNZYSTEPS: {
      createOnboardingObject: {
        value: 1,
        label: 'Create Onboarding Object',
        sequence: 1
      },
      investorLogin: {
        value: 2,
        label: 'Investor Login',
        sequence: 2
      },
      executePOI: {
        value: 3,
        label: 'Execute POI',
        sequence: 3
      },
      updatePOI: {
        value: 4,
        label: 'Update POI',
        sequence: 4
      },
      executePOA: {
        value: 5,
        label: 'Execute POA',
        sequence: 5
      },
      updatePOA: {
        value: 6,
        label: 'Update POA',
        sequence: 6
      },
      executeCorrespondencePOA: {
        value: 7,
        label: 'Execute orrespondence POA',
        sequence: 7
      },
      updateCorrespondencePOA: {
        value: 8,
        label: 'Update Correspondence POA',
        sequence: 8
      },
      updateFormsData: {
        value: 9,
        label: 'Update Forms Data',
        sequence: 9
      },
      updateFatca: {
        value: 10,
        label: 'Update Fatca',
        sequence: 10
      },
      updateSignature: {
        value: 11,
        label: 'Update Signature',
        sequence: 11
      },
      updatePhoto: {
        value: 12,
        label: 'Update Photo',
        sequence: 12
      },
      executeStartVideo: {
        value: 13,
        label: 'Execute Start Video',
        sequence: 13
      },
      executeRecordedVideo: {
        value: 14,
        label: 'Execute Recorded Video',
        sequence: 14
      },
      executeVerificationEngine: {
        value: 15,
        label: 'Execute Verification Engine',
        sequence: 15
      },
      pullOnboardingDetails: {
        value: 16,
        label: 'Pull Onboarding Details',
        sequence: 16
      },
      pullCAMSResponse: {
        value: 17,
        label: 'Pull CAMS Response',
        sequence: 17
      },
      pullKarvyData: {
        value: 18,
        label: 'Pull Karvy Data for Manual Trigger',
        sequence: 18
      },
      pushKarvyDataManually: {
        value: 19,
        label: 'Push Karvy Data Manually',
        sequence: 19
      }
    },
    SCENARIOSTATUS: {
      modified: {
        value: 1,
        label: 'Modified',
        sequence: 1
      },
      finalized: {
        value: 2,
        label: 'Finalized',
        sequence: 2
      },
      communicatedToClient: {
        value: 3,
        label: 'Communicated To Client',
        sequence: 3
      }
    },
    BANKVALIDATIONSTATUS: {
      success: {
        value: 1,
        label: 'Successful',
        sequence: 1
      },
      nameMatchFailed: {
        value: 2,
        label: 'Bank Validation Successful, Name Match Failed',
        sequence: 2
      },
      inProcess: {
        value: 3,
        label: 'In Process',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      }
    },
    TRANSACTIONGENERATIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      success: {
        value: 2,
        label: 'Successful',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      }
    },
    ORDERITEMSOURCE: {
      userPlaced: {
        value: 1,
        label: 'User Placed',
        sequence: 1
      },
      systematicMethodExecutor: {
        value: 2,
        label: 'Systematic Method Executor',
        sequence: 2
      },
      casUpload: {
        value: 3,
        label: 'CAS Upload',
        sequence: 3
      },
      externalOrder: {
        value: 4,
        label: 'External Order',
        sequence: 4
      }
    },
    PAYMENTCONFIRMATIONTOAMCSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      processing: {
        value: 2,
        label: 'Processing',
        sequence: 2
      },
      processed: {
        value: 3,
        label: 'Processed',
        sequence: 3
      }
    },
    FATCAGENERATIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      success: {
        value: 2,
        label: 'Successful',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      },
      notApplicable: {
        value: 4,
        label: 'Not Applicable',
        sequence: 4
      },
      processing: {
        value: 5,
        label: 'Processing',
        sequence: 5
      }
    },
    MARITALSTATUS: {
      married: {
        value: 1,
        label: 'Married',
        sequence: 1,
        bankCode: 2
      },
      unMarried: {
        value: 2,
        label: 'Single',
        sequence: 2,
        bankCode: 1
      },
      divorced: {
        value: 3,
        label: 'Divorced',
        sequence: 3,
        bankCode: 3
      },
      widowed: {
        value: 4,
        label: 'Widowed',
        sequence: 4,
        bankCode: 4
      },
      separated: {
        value: 5,
        label: 'Separated',
        sequence: 5,
        bankCode: 5
      },
      others: {
        value: 6,
        label: 'Others',
        sequence: 6,
        bankCode: 6
      }
    },

    DOCUMENTSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      redo: {
        value: 2,
        label: 'Redo',
        sequence: 2
      },
      generated: {
        value: 3,
        label: 'Generated',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      }
    },
    UTR_FILE_UPLOAD_STATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      processing: {
        value: 2,
        label: 'Uploaded',
        sequence: 2
      }
    },
    DOCUMENTPROOFTYPE: {
      passport: {
        value: 1,
        label: 'Passport',
        sequence: 1
      },
      drivingLicense: {
        value: 2,
        label: 'Driving License',
        sequence: 2
      },
      voterIdentityCard: {
        value: 3,
        label: 'Voter Identity Card',
        sequence: 3
      },
      rationCard: {
        value: 4,
        label: 'Ration Card',
        sequence: 4
      },
      telephoneBill: {
        value: 5,
        label: 'Latest Land Line Telephone Bill',
        sequence: 5
      },
      electricityBill: {
        value: 6,
        label: 'Latest Electricity Bill',
        sequence: 6
      },
      gasBill: {
        value: 7,
        label: 'Gas Bill',
        sequence: 7
      },
      aadhaar: {
        value: 8,
        label: 'AADHAAR',
        sequence: 8
      },
      pan: {
        value: 9,
        label: 'PAN',
        sequence: 9
      }
    },

    PLATFORMURL: {
      invezta: {
        value: 1,
        label: 'https://newstack.invezta.com/',
        sequence: 1
      },
      finzipp: {
        value: 2,
        label: 'https://www.finzipp.com/',
        sequence: 2
      },
      mdcb: {
        value: 3,
        label: 'https://mdcb-staging.invezta.com/',
        sequence: 3
      },
      localhost: {
        value: 4,
        label: 'http://localhost:4200/',
        sequence: 4
      }
    },
    MANDATEPGSTATUS: {
      received: {
        value: 1,
        label: 'Mandate Received',
        sequence: 1
      },
      sent: {
        value: 2,
        label: 'Mandate Sent to PG',
        sequence: 2
      }
    },
    SUBSCRIPTIONFREQUENCY: {
      monthly: {
        value: 1,
        label: 'Monthly',
        sequence: 1
      },
      quarterly: {
        value: 2,
        label: 'Quarterly',
        sequence: 2
      },
      semiannually: {
        value: 3,
        label: 'Semi Annually',
        sequence: 3
      },
      annually: {
        value: 4,
        label: 'Annually',
        sequence: 4
      }
    },
    SUBSCRIPTIONTYPE: {
      platformFee: {
        value: 1,
        label: 'Platform Fee',
        sequence: 1
      },
      rebalFee: {
        value: 2,
        label: 'Rebalancing Fee',
        sequence: 2
      }
    },
    SUBSCRIPTIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      active: {
        value: 2,
        label: 'Active',
        sequence: 2
      },
      expired: {
        value: 3,
        label: 'Expired',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      },
      processing: {
        value: 5,
        label: 'Processing',
        sequence: 5
      }
    },
    DOCUMENTUPLOADTYPE: {
      pancards: {
        value: 1,
        label: 'pancards',
        sequence: 1
      },
      kyc: {
        value: 2,
        label: 'kyc',
        sequence: 2
      },
      signatures: {
        value: 3,
        label: 'signatures',
        sequence: 3
      },
      relationshipdocuments: {
        value: 4,
        label: 'relationshipdocuments',
        sequence: 4
      },
      cheques: {
        value: 5,
        label: 'cheques',
        sequence: 5
      },
      aadharback: {
        value: 6,
        label: 'aadharback',
        sequence: 6
      },
      aadharfront: {
        value: 7,
        label: 'aadharfront',
        sequence: 7
      },
      aof: {
        value: 8,
        label: 'aof',
        sequence: 8
      },
      mandates: {
        value: 9,
        label: 'mandates',
        sequence: 9
      }
    },
    CAPITALGAINTYPE: {
      shortTerm: {
        value: 1,
        label: 'Short Term',
        sequence: 1
      },
      longTerm: {
        value: 2,
        label: 'Long Term',
        sequence: 2
      }
    },
    CASREQUESTSTATUS: {
      notInitiated: {
        value: 1,
        label: 'Not Initiated',
        sequence: 1
      },
      triggered: {
        value: 2,
        label: 'Triggered',
        sequence: 2
      },
      recieved: {
        value: 3,
        label: 'Recieved',
        sequence: 3
      },
      processing: {
        value: 4,
        label: 'Processing',
        sequence: 4
      },
      processed: {
        value: 5,
        label: 'Processed',
        sequence: 5
      },
      failed: {
        value: 6,
        label: 'Failed',
        sequence: 6
      }
    },
    CASTYPE: {
      cams: {
        value: 1,
        label: 'CAMS',
        sequence: 1
      },
      nsdl: {
        value: 2,
        label: 'NSDL',
        sequence: 2
      },
      cdsl: {
        value: 3,
        label: 'CDSL',
        sequence: 3
      },
      kFintech: {
        value: 4,
        label: 'KFintech',
        sequence: 4
      }
    },
    CASREADTYPE: {
      upload: {
        value: 1,
        label: 'Upload',
        sequence: 1
      },
      email: {
        value: 2,
        label: 'email',
        sequence: 2
      }
    },
    BANKACCOUNTSTATUS: {
      active: {
        value: 1,
        label: 'Active',
        sequence: 1,
        bankCode: [6, 8, 17]
      },
      blocked: {
        value: 2,
        label: 'Blocked',
        sequence: 2,
        bankCode: [2, 3, 4, 10, 16, 18]
      },
      dormant: {
        value: 3,
        label: 'Dormant',
        sequence: 3,
        bankCode: [7, 11, 12]
      },
      closed: {
        value: 4,
        label: 'Closed',
        sequence: 4,
        bankCode: [1, 5]
      }
    },
    PAYMENTRECONCILIATIONSTATUS: {
      reconciled: {
        value: 1,
        label: 'Reconciled',
        sequence: 1
      },
      failed: {
        value: 2,
        label: 'Failed',
        sequence: 2
      },
      pending: {
        value: 3,
        label: 'Pending',
        sequence: 3
      },
      successful: {
        value: 4,
        label: 'Successful',
        sequence: 4
      },
      unreconciled : {
        value : 5,
        label : 'UnReconciled', //in 2PM call only
        sequence : 5
      },
      initiated : {
        value : 6,
        label : 'Initiated',
        sequence : 6
      },
      unknown : {
        value : 7,
        label : 'UnReconciled',
        sequence : 7
      },
    },
    PAYMENTREVERSALSTATUS : {
      successful: {
        value: 1,
        label: 'Successful',
        sequence: 1
      },
      failed: {
        value: 2,
        label: 'Failed',
        sequence: 2
      },
      pending: {
        value: 3,
        label: 'Pending',
        sequence: 3
      }
    },
    RTAHOLDINGRECONCILIATIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      unreconciled: {
        value: 2,
        label: 'Unreconciled',
        sequence: 2
      },
      reconciled: {
        value: 3,
        label: 'Reconciled',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      },
      processing: {
        value: 5,
        label: 'Processing',
        sequences: 5
      },
      successful: {
        value: 6,
        label: 'Successful',
        sequences: 6
      }
    },
    VERIFICATIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      successful: {
        value: 2,
        label: 'Successful',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      }
    },
    DEPOSITDETAILSACTIONONMATURITY: {
      renewPrincipal: {
        value: 1,
        label: 'Renew Principal Only',
        sequence: 1
      },
      renewPrincipalAndInterest: {
        value: 2,
        label: 'Renew Principal & Interest',
        sequence: 2
      },
      renewInterest: {
        value: 4,
        label: 'Renew Interest',
        sequence: 4
      },
      doNoRenew: {
        value: 3,
        label: 'Do Not Renew',
        sequence: 3
      },
      maturityToAccount: {
        value: 1,
        label: 'Transfer to Account',
        sequence: 5
      },
      maturityProceedsToFDPI: {
        value: 2,
        label: 'Convert to Fixed Deposit (Principal and Interest)',
        sequence: 6
      },
      maturityProceedsToFDP: {
        value: 3,
        label: 'Convert to Fixed Deposit (Principal Only)',
        sequence: 7
      }
    },
    DEPOSITDETAILSSUBTYPE: {
      IO: {
        value: 1,
        label: 'Non-Cumulative',
        sequence: 1
      },
      II: {
        value: 2,
        label: 'Cumulative',
        sequence: 2
      }
    },
    DEPOSITINSTRUMENT: {
      BOSCODES: {
        FD: {value: 'FD_C', label: 'Fixed Deposit', sequence: 1},
        RD: {value: 'RD_C', label: 'Recurring Deposit', sequence: 2},
        TS: {value: 'Tax Saving_T', label: 'Tax Saving Deposit', sequence: 3}
      },
      FDTYPES: {
        FD: {value: 'C', label: 'Fixed Deposit', sequence: 1},
        TS: {value: 'T', label: 'Tax Saving Deposit', sequence: 2}
      }
    },
    DEPOSITDETAILSINTERESTPAYMENTFREQUENCY: {
      MIP: {value: 'MIP', label: 'Monthly Interest Payout'},
      QIP: {value: 'QIP', label: 'Quarterly Interest Payout'},
      REINVESTMENT: {value: 'Reinvestment', label: 'On Maturity'},
      DAYS: {value: 'Days', label: 'Days'}
    },
    DEPOSITACCOUNTSTATUS: {
      closed: {value: 1, label: 'Closed', sequence: 1},
      matured: {value: 2, label: 'Matured', sequence: 2},
      forceRenew: {value: 3, label: 'Force Renew', sequence: 3},
      unclaimed: {value: 4, lable: 'Unclaimed', sequence: 4},
      closedToday: {value: 5, label: 'Closed Today', sequence: 5},
      openToday: {value: 6, label: 'Open Today', sequence: 6},
      dormant: {value: 7, label: 'Dormant', sequence: 7},
      openRegular: {value: 8, label: 'Open Regular', sequence: 8}
    },
    RECOMMENDATIONTYPE: {
      buy: {
        value: 1,
        label: 'BUY',
        sequence: 1
      },
      hold: {
        value: 2,
        label: 'HOLD',
        sequence: 2
      },
      sell: {
        value: 3,
        label: 'SELL',
        sequence: 3
      },
      immediatesell: {
        value: 4,
        label: 'IMMEDIATESELL',
        sequence: 4
      }
      /*buysecondary: {
        value: 5,
        label: 'BUYSECONDARY',
        sequence: 5
      },
      holdsecondary: {
        value: 6,
        label: 'HOLDSECONDARY',
        sequence: 6
      },
      sellsecondary: {
        value: 7,
        label: 'SELLSECONDARY',
        sequence: 7
      },
      immediatesellsecondary: {
        value: 8,
        label: 'IMMEDIATESELLSECONDARY',
        sequence: 8
      }*/
    },
    //constants to avoid pulling data from DB
    //these items won't change
    MAXSHCEMEWEIGHTSETTING: {
      FULL: {
        categoryWeight: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        maxSchemeWeight: [20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25]
      },
      MINI: {
        categoryWeight: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        maxSchemeWeight: [20, 20, 30, 25, 25, 30, 35, 30, 30, 35, 35]
      }
    },
    REBALANCINGSETTINGS: {
      alertForUrgent: true, //do we alert for urgent rebalancing case or not. false: if alert to be raised only in normal deviations
      goalShortfallTolerance: 0.1, //10%
      assetClassDeviationTolerance: 0.05, //5%
      categoryGroupDeviationTolerance: 0.05, //5%
      goalShortfallToleranceUrgent: 0.2, //20%
      assetClassDeviationToleranceUrgent: 0.1, //10%
      categoryGroupDeviationToleranceUrgent: 0.1, //10%
      precisionPoint: 0.00001, //rebalancing till 0.001%
      percentCentBase: 1, //1 => 100%, 5.23% shall be like 0.0523 in data (change to 100 otherwise),
      cleanUpNotRecommendedSchemes: true, //sell not recommended schemes while rebalancing
      waterfallTolerance: 0.01,
      maxSchemeWeight: 0.35 //35% if can't be derived from data
    },
    ASSETCLASSES: {
      data: [3, 4, 5, 9],
      name: ['Commodities', 'Debt', 'Equity', 'Hybrid']
    },
    ASSETTODEFAULTCATEGORIES: {
      data: [47, 29, 20, 20]
    },
    CATEGORIES: {
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
        69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81
      ],
      name: [
        'Equity: Multi Cap',
        'Equity: Thematic-Energy',
        'Equity: Thematic-PSU',
        'Equity: Thematic-ESG',
        'Equity: Sectoral-Banking',
        'Equity: Sectoral-FMCG',
        'Equity: Sectoral-Infrastructure',
        'Equity: Sectoral-Pharma',
        'Equity: Thematic-Dividend Yield',
        'Equity: Sectoral-Technology',
        'Equity: Thematic-MNC',
        'Hybrid: Balanced Advantage',
        'Equity: Thematic-Consumption',
        'Debt: Floater',
        'Debt: Gilt with 10 year Constant Duration',
        'Debt: Gilt',
        'Equity: Large Cap',
        'Equity: Large & MidCap',
        'Equity: Flexi Cap',
        'Equity: Mid Cap',
        'Equity: Small Cap',
        'Equity: Value Oriented',
        'Equity: ELSS',
        'Equity: Thematic',
        'Equity: International',
        'Debt: Long Duration',
        'Debt: Medium to Long Duration',
        'Debt: Medium Duration',
        'Debt: Short Duration',
        'Debt: Ultra Short Duration',
        'Debt: Low Duration',
        'Debt: Liquid',
        'Debt: Overnight',
        'Debt: Money Market',
        'Debt: Dynamic Bond',
        'Debt: FMP',
        'Debt: Credit Risk',
        'Debt: Banking and PSU',
        'Hybrid: Aggressive Hybrid',
        'Debt: Corporate Bond',
        'Hybrid: Balanced Hybrid',
        'Hybrid: Conservative Hybrid',
        'Hybrid: Equity Savings',
        'Hybrid: Arbitrage',
        'Hybrid: Dynamic Asset Allocation',
        'Hybrid: Multi Asset Allocation',
        'Commodities: Gold',
        'Debt: Ultra Short Term(Old)',
        'Debt: Short Term(Old)',
        'Debt: Liquid(Old)',
        'Debt: Income(Old)',
        'Debt: Gilt Short Term(Old)',
        'Debt: Gilt Medium & Long Term(Old)',
        'Debt: FMP(Old)',
        'Equity: Large Cap(Old)',
        'Equity: Multi Cap(Old)',
        'Equity: Mid Cap(Old)',
        'Equity: Small Cap(Old)',
        'Equity: Banking(Old)',
        'Equity: Others(Old)',
        'Equity: Auto(Old)',
        'Equity: Petroleum(Old)',
        'Equity: Pharma(Old)',
        'Equity: Tax Saving(Old)',
        'Equity: FMCG(Old)',
        'Equity: Technology(Old)',
        'Equity: Infrastructure(Old)',
        'Hybrid: Equity-oriented(Old)',
        'Hybrid: Debt-oriented Aggressive(Old)',
        'Equity: International(Old)',
        'Hybrid: Debt-oriented Conservative(Old)',
        'Hybrid: Arbitrage(Old)',
        'Hybrid: Asset Allocation(Old)',
        'Gold: Funds(Old)',
        'Hybrid: Others(Old)',
        'Debt: Others(Old)',
        'Debt: Dynamic Bond(Old)',
        'Debt: Credit Opportunities(Old)',
        'Commodities: Silver',
        'Debt: Deposit',
        'Debt: Target Maturity'
      ]
    },
    GROUPCATEGORIES: {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      name: [
        'EquitySafe',
        'EquityDiversified',
        'EquityThematic',
        'DebtLiquid',
        'DebtArbitrage',
        'DebtShort',
        'DebtMediumLong',
        'CommoditiesGold',
        'CommoditiesSilver'
      ]
    },
    CATEGORYGROUPCATEGORYMAPPING: {
      data: {
        '1': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '2': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '3': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '4': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '5': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '6': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '7': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '8': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '9': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '10': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '11': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '12': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '13': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '14': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '15': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '16': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '17': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '18': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '19': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '20': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '21': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '22': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '23': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '24': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '25': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '26': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '27': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '28': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '29': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '30': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '31': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '32': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '33': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '34': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '35': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '36': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '37': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '38': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '39': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '40': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '41': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '42': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '43': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '44': [0, 0, 0, 0, 1, 0, 0, 0, 0],
        '45': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '46': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '47': [0, 0, 0, 0, 0, 0, 0, 1, 0],
        '48': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '49': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '50': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '51': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '52': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '53': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '54': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '55': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '56': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '57': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '58': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '59': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '60': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '61': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '62': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '63': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '64': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '65': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '66': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '67': [0, 0, 1, 0, 0, 0, 0, 0, 0],
        '68': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '69': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '70': [1, 0, 0, 0, 0, 0, 0, 0, 0],
        '71': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '72': [0, 0, 0, 0, 1, 0, 0, 0, 0],
        '73': [0, 1, 0, 0, 0, 0, 0, 0, 0],
        '74': [0, 0, 0, 0, 0, 0, 0, 1, 0],
        '75': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '76': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '77': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '78': [0, 0, 0, 0, 0, 1, 0, 0, 0],
        '79': [0, 0, 0, 0, 0, 0, 0, 0, 1],
        '80': [0, 0, 0, 1, 0, 0, 0, 0, 0],
        '81': [0, 0, 0, 1, 0, 0, 0, 0, 0]
      }
    },
    CATEGORYASSETEXPOSURE: {
      data: {
        '1': [0, 0, 1, 0],
        '2': [0, 0, 1, 0],
        '3': [0, 0, 1, 0],
        '4': [0, 0, 1, 0],
        '5': [0, 0, 1, 0],
        '6': [0, 0, 1, 0],
        '7': [0, 0, 1, 0],
        '8': [0, 0, 1, 0],
        '9': [0, 0, 1, 0],
        '10': [0, 0, 1, 0],
        '11': [0, 0, 1, 0],
        '12': [0, 0.35, 0.65, 0],
        '13': [0, 0, 1, 0],
        '14': [0, 1, 0, 0],
        '15': [0, 1, 0, 0],
        '16': [0, 1, 0, 0],
        '17': [0, 0, 1, 0],
        '18': [0, 0, 1, 0],
        '19': [0, 0, 1, 0],
        '20': [0, 0, 1, 0],
        '21': [0, 0, 1, 0],
        '22': [0, 0, 1, 0],
        '23': [0, 0, 1, 0],
        '24': [0, 0, 1, 0],
        '25': [0, 0, 1, 0],
        '26': [0, 1, 0, 0],
        '27': [0, 1, 0, 0],
        '28': [0, 1, 0, 0],
        '29': [0, 1, 0, 0],
        '30': [0, 1, 0, 0],
        '31': [0, 1, 0, 0],
        '32': [0, 1, 0, 0],
        '33': [0, 1, 0, 0],
        '34': [0, 1, 0, 0],
        '35': [0, 1, 0, 0],
        '36': [0, 1, 0, 0],
        '37': [0, 1, 0, 0],
        '38': [0, 1, 0, 0],
        '39': [0, 0.35, 0.65, 0],
        '40': [0, 1, 0, 0],
        '41': [0, 0.5, 0.5, 0],
        '42': [0, 0.75, 0.25, 0],
        '43': [0, 0.65, 0.35, 0],
        '44': [0, 1, 0, 0],
        '45': [0, 0.35, 0.65, 0],
        '46': [0, 0.35, 0.65, 0],
        '47': [1, 0, 0, 0],
        '48': [0, 1, 0, 0],
        '49': [0, 1, 0, 0],
        '50': [0, 1, 0, 0],
        '51': [0, 1, 0, 0],
        '52': [0, 1, 0, 0],
        '53': [0, 1, 0, 0],
        '54': [0, 1, 0, 0],
        '55': [0, 0, 1, 0],
        '56': [0, 0, 1, 0],
        '57': [0, 0, 1, 0],
        '58': [0, 0, 1, 0],
        '59': [0, 0, 1, 0],
        '60': [0, 0, 1, 0],
        '61': [0, 0, 1, 0],
        '62': [0, 0, 1, 0],
        '63': [0, 0, 1, 0],
        '64': [0, 0, 1, 0],
        '65': [0, 0, 1, 0],
        '66': [0, 0, 1, 0],
        '67': [0, 0, 1, 0],
        '68': [0, 0.35, 0.65, 0],
        '69': [0, 0.75, 0.25, 0],
        '70': [0, 0, 1, 0],
        '71': [0, 0.75, 0.25, 0],
        '72': [0, 1, 0, 0],
        '73': [0, 0.35, 0.65, 0],
        '74': [1, 0, 0, 0],
        '75': [0, 0, 1, 0],
        '76': [0, 1, 0, 0],
        '77': [0, 1, 0, 0],
        '78': [0, 1, 0, 0],
        '79': [1, 0, 0, 0],
        '80': [0, 1, 0, 0],
        '81': [0, 1, 0, 0]
      }
    },
    CATEGORYGROUPASSETEXPOSURE: {
      data: {
        '1': [0, 0, 1, 0],
        '2': [0, 0, 1, 0],
        '3': [0, 0, 1, 0],
        '4': [0, 1, 0, 0],
        '5': [0, 1, 0, 0],
        '6': [0, 1, 0, 0],
        '7': [0, 1, 0, 0],
        '8': [1, 0, 0, 0],
        '9': [1, 0, 0, 0]
      }
    },
    MODELPORTFOLIOAMOUNTCAPPING: {
      '1': {
        minAmount: 5000,
        maxAmount: 19999.999999,
        investmentType: 1,
        amountCappingId: 1
      },
      '2': {
        minAmount: 10000,
        maxAmount: 499999.999999,
        investmentType: 2,
        amountCappingId: 2
      },
      '3': {
        minAmount: 20000,
        maxAmount: 10000000000,
        investmentType: 1,
        amountCappingId: 3
      },
      '4': {
        minAmount: 500000,
        maxAmount: 10000000000,
        investmentType: 2,
        amountCappingId: 4
      }
    },
    MODELPORTFOLIOCAPPINGMAPPING: {
      MINI: [1, 2],
      FULL: [3, 4]
    },
    WEEKLYSYSTEMATICBYDATEDAY: {
      date: {
        value: 1,
        label: 'DATE',
        sequence: 1
      },
      day: {
        value: 2,
        label: 'DAY',
        sequence: 2
      }
    },
    OSTYPE: {
      IOS: {
        value: 1,
        label: 'ios',
        sequence: 1
      },
      ANDROID: {
        value: 2,
        label: 'Android',
        sequence: 2
      }
    },
    VERSIONSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      active: {
        value: 2,
        label: 'Active',
        sequence: 2
      },
      blocked: {
        value: 3,
        label: 'Blocked',
        sequence: 3
      },
      suspended: {
        value: 4,
        label: 'Suspended',
        sequence: 4
      }
    },
    FAMILYREQUESTSTATUS: {
      initiated: {
        value: 1,
        label: 'Initiated',
        sequence: 1
      },
      approved: {
        value: 2,
        label: 'Approved',
        sequence: 2
      },
      rejected: {
        value: 3,
        label: 'Rejected',
        sequence: 3
      },
      revoked: {
        value: 4,
        label: 'Revoked',
        sequence: 4
      }
    },
    FAMILYREQUESTREJECTS: {
      maxrejects: {
        value: 5
      },
      daysgapafterreject: {
        value: 5
      }
    },
    FAMILYREQUESTREVOKES: {
      daysgapafterrevoke: {
        value: 5
      }
    },
    GOALMAPPING: {
      minAmountLeftAfterTransfer: {
        value: 1000
      },
      minAmountToTransfer: {
        value: 1000
      }
    },
    CUSTOMERDOCUMENTTYPE: {
      pancards: {
        value: 1,
        label: 'pancards',
        sequence: 1
      },
      kyc: {
        value: 2,
        label: 'kyc',
        sequence: 2
      },
      signatures: {
        value: 3,
        label: 'signatures',
        sequence: 3
      },
      relationshipdocuments: {
        value: 4,
        label: 'relationshipdocuments',
        sequence: 4
      },
      cheques: {
        value: 5,
        label: 'cheques',
        sequence: 5
      },
      aadharback: {
        value: 6,
        label: 'aadharback',
        sequence: 6
      },
      aadharfront: {
        value: 7,
        label: 'aadharfront',
        sequence: 7
      },
      aof: {
        value: 8,
        label: 'aof',
        sequence: 8
      },
      mandates: {
        value: 9,
        label: 'mandates',
        sequence: 9
      }
    },
    WEEKDAYS: {
      days: {
        0: {
          id: 0,
          day: 'SUNDAY'
        },
        1: {
          id: 1,
          day: 'MONDAY'
        }
      }
    },
    SCHEMESPECIFICRULES: {
      SBISCAP: {
        rtaCodes: ['346D', '346DP', '346G'],
        sipLimit: 25000,
        cutOffDate: '2021-02-04' //04-Feb-2021
      },
      MAEBF: {
        rtaCodes: ['EBRDR', 'EBRGG', 'EBRDD'],
        sipLimit: 2500
      }
    },
    APPUSERCATEGORY: {
      bankStaff: {
        value: 1,
        label: 'Bank Staff',
        sequence: 1
      },
      adfcStaff: {
        value: 2,
        label: 'ADFC Staff',
        sequence: 2
      },
      hdbStaff: {
        value: 3,
        label: 'HDB Staff',
        sequence: 3
      },
      hslStaff: {
        value: 4,
        label: 'HSL Staff',
        sequence: 4
      }
    },

    USERTYPE: {
      rm: {
        value: 1,
        label: 'RM',
        sequence: 1
      },
      general: {
        value: 2,
        label: 'General',
        sequence: 2
      },
      client: {
        value: 4,
        label: 'Client',
        sequence: 4
      }
    },

    SALUTATION: {
      'LT.COL.': {
        value: 1,
        label: 'LT.COL.',
        sequence: 1
      },
      MASTER: {
        value: 2,
        label: 'MASTER',
        sequence: 2
      },
      CDR: {
        value: 3,
        label: 'CDR',
        sequence: 3
      },
      'KUM.': {
        value: 4,
        label: 'KUM.',
        sequence: 4
      },
      JWO: {
        value: 5,
        label: 'JWO',
        sequence: 5
      },
      'FLT.LT': {
        value: 6,
        label: 'FLT.LT',
        sequence: 6
      },
      'MR.': {
        value: 7,
        label: 'MR.',
        sequence: 7
      },
      MRS: {
        value: 8,
        label: 'MRS',
        sequence: 8
      },
      'DR.': {
        value: 9,
        label: 'DR.',
        sequence: 9
      },
      'M/S.': {
        value: 10,
        label: 'M/S.',
        sequence: 10
      },
      'COMM.': {
        value: 11,
        label: 'COMM.',
        sequence: 11
      },
      LT: {
        value: 12,
        label: 'LT',
        sequence: 12
      },
      PRSDNT: {
        value: 13,
        label: 'PRSDNT',
        sequence: 13
      },
      'MAST.': {
        value: 14,
        label: 'MAST.',
        sequence: 14
      },
      'MRS.': {
        value: 15,
        label: 'MRS.',
        sequence: 15
      },
      'CAPT.': {
        value: 16,
        label: 'CAPT.',
        sequence: 16
      },
      'MAJ.GEN': {
        value: 17,
        label: 'MAJ.GEN',
        sequence: 17
      },
      'WG.COMM': {
        value: 18,
        label: 'WG.COMM',
        sequence: 18
      },
      MAST: {
        value: 19,
        label: 'MAST',
        sequence: 19
      },
      'LT.CDR': {
        value: 20,
        label: 'LT.CDR',
        sequence: 20
      },
      SUB: {
        value: 21,
        label: 'SUB',
        sequence: 21
      },
      'MS.': {
        value: 22,
        label: 'MS.',
        sequence: 22
      },
      COLONEL: {
        value: 23,
        label: 'COLONEL',
        sequence: 23
      },
      HAV: {
        value: 24,
        label: 'HAV',
        sequence: 24
      },
      KUM: {
        value: 25,
        label: 'KUM',
        sequence: 25
      },
      'L/NK': {
        value: 26,
        label: 'L/NK',
        sequence: 26
      },
      GENERAL: {
        value: 27,
        label: 'GENERAL',
        sequence: 27
      },
      MR: {
        value: 28,
        label: 'MR',
        sequence: 28
      },
      'BRIG.': {
        value: 29,
        label: 'BRIG.',
        sequence: 29
      },
      MD: {
        value: 30,
        label: 'MD',
        sequence: 30
      },
      SHRI: {
        value: 31,
        label: 'SHRI',
        sequence: 31
      },
      'DR(MS)': {
        value: 32,
        label: 'DR(MS)',
        sequence: 32
      },
      'GR.CAPT': {
        value: 33,
        label: 'GR.CAPT',
        sequence: 33
      },
      'LT. CDR': {
        value: 34,
        label: 'LT. CDR',
        sequence: 34
      },
      SMT: {
        value: 35,
        label: 'SMT',
        sequence: 35
      },
      'PROF.': {
        value: 36,
        label: 'PROF.',
        sequence: 36
      },
      '.': {
        value: 37,
        label: '.',
        sequence: 37
      },
      'AIR.MAR': {
        value: 38,
        label: 'AIR.MAR',
        sequence: 38
      },
      'FR.': {
        value: 39,
        label: 'FR.',
        sequence: 39
      },
      SEP: {
        value: 40,
        label: 'SEP',
        sequence: 40
      },
      'AIR.VM': {
        value: 41,
        label: 'AIR.VM',
        sequence: 41
      },
      MS: {
        value: 42,
        label: 'MS',
        sequence: 42
      },
      MAJOR: {
        value: 43,
        label: 'MAJOR',
        sequence: 43
      },
      SARDAR: {
        value: 44,
        label: 'SARDAR',
        sequence: 44
      },
      REARADM: {
        value: 45,
        label: 'REARADM',
        sequence: 45
      },
      SHIR: {
        value: 46,
        label: 'SHIR',
        sequence: 46
      },
      'COL.': {
        value: 47,
        label: 'COL.',
        sequence: 47
      },
      'DR(MRS)': {
        value: 48,
        label: 'DR(MRS)',
        sequence: 48
      },
      'LT.GEN': {
        value: 49,
        label: 'LT.GEN',
        sequence: 49
      },
      'SQN.LDR': {
        value: 50,
        label: 'SQN.LDR',
        sequence: 50
      },
      'AIR.COM': {
        value: 51,
        label: 'AIR.COM',
        sequence: 51
      },
      '2ND.LT': {
        value: 52,
        label: '2ND.LT',
        sequence: 52
      },
      INS: {
        value: 53,
        label: 'INS',
        sequence: 53
      },
      'FLT. LT': {
        value: 54,
        label: 'FLT. LT',
        sequence: 54
      }
    },
    DEPOSITDETAILSTATUS: {
      active: {value: 1, label: 'Active'},
      preMature: {value: 2, label: 'Pre Mature'},
      mature: {value: 3, label: 'Mature'}
    },
    CONSOLIDATEDDOCUMENTSTATUS: {
      pending: {value: 1, label: 'Pending'},
      generated: {value: 2, label: 'Generated'},
      successful: {value: 3, label: 'Successful'},
      failed: {value: 4, label: 'Failed'}
    },
    NOMINEEDOCUMENTSTATUS: {
      pending: {value: 1, label: 'Pending'},
      generated: {value: 2, label: 'Generated'},
      successful: {value: 3, label: 'Successful'},
      failed: {value: 4, label: 'Failed'}
    },
    RTAREMARKS: {
      successful: {value: 1, label: 'Successful'},
      failed: {value: 2, label: 'Failed'}
    },
    TRUEFALSEVARS: {
      TRUEOPTION: {
        value: true
      },
      FALSEOPTION: {
        value: false
      }
    },
    BOOLEANVARS: {
      true: true,
      false: false
    },
    EXTERNALAPISYSTEMNAME: {
      GOOGLE_SCHEDULER: 'GOOGLE_SCHEDULER',
      IDCOM: 'IDCOM',
      EKYC: 'EKYC',
      DBOS: 'DBOS',
      SIGNATURE: 'SIGNATURE',
      APIGEE: 'APIGEE',
      COREBANKING: 'COREBANKING',
      KARVY: 'KARVY',
      FCPB: 'FCPB',
      FINACLE: 'FINACLE',
      CASA: 'CASA',
      FATCA: 'FATCA',
      HOLDING: 'HOLDING',
      VALUE_RESEARCH: 'VALUE_RESEARCH',
      DEPOSIT: 'DEPOSIT',
      NOTIFICATION: 'NOTIFICATION',
      OTP_NOTIFICATION: 'OTP_NOTIFICATION',
      NOMINEE: 'NOMINEE'
    },
    BENCHMARKMAPPINGLEVEL: {
      instrument: {
        value: 1,
        label: 'Instrument Level',
        sequence: 1
      },
      category: {
        value: 2,
        label: 'Category Level',
        sequence: 2
      },
      product: {
        value: 3,
        label: 'Product Level',
        sequence: 3
      }
    },
    BENCHMARKSTATECHANGEREQUESTSTATUS: {
      pendingConfirmation: {
        value: 1,
        label: 'Pending for Authorization',
        sequence: 1
      },
      active: {
        value: 2,
        label: 'Authorized',
        sequence: 2
      },
      rejected: {
        value: 3,
        label: 'Rejected',
        sequence: 3
      },
      editDetailsPendingConfirmation: {
        value: 4,
        label: 'Edit Details Pending for Authorization',
        sequence: 4
      }
    },
    URIEXCLUSIONLISTFROMREQUESTRESPONSEENCRYPTION: [
      '/handleIdcomCallback',
      '/handleEkycCallback',
      '/invokeCron',
      '/createUserUsingUAM',
      '/disableUserUsingUAM',
      '/enableUserUsingUAM',
      '/deleteUserUsingUAM',
      '/reopenUserUsingUAM',
      '/unlockUserUsingUAM',
      '/updateUserUsingUAM'
    ],
    RTAHOLDINGSTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      processing: {
        value: 2,
        label: 'Processing',
        sequence: 2
      },
      successful: {
        value: 3,
        label: 'Successful',
        sequence: 3
      },
      failed: {
        value: 4,
        label: 'Failed',
        sequence: 4
      }
    },
    POLLINGSTATUS: {
      started: {
        value: 1,
        label: 'Initiated',
        sequence: 1
      },
      success: {
        value: 2,
        label: 'Success',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      }
    },
    MODELPORTFOLIOMODELTYPE: {
      different: {
        value: 1,
        label: 'different',
        sequence: 1
      },
      same: {
        value: 2,
        label: 'same',
        sequence: 2
      }
    },
    MODELCONFIGBYWEIGHTORQUATITY: {
      weight: {
        value: 1,
        label: 'weight',
        sequence: 1
      },
      quantity: {
        value: 2,
        label: 'quantity',
        sequence: 2
      }
    },
    MODELPORTFOLIOGOALTYPE: {
      mutualFund: {
        value: 1,
        label: 'Mutual Fund',
        sequence: 1
      },
      multiProduct: {
        value: 2,
        label: 'Multi Product',
        sequence: 2
      },
      largeCapStockBasket: {
        value: 3,
        label: 'Large Cap Stock Basket',
        sequence: 3
      },
      dynamicStockBasket: {
        value: 4,
        label: 'Dynamic Stock Basket',
        sequence: 4
      },
      winnersStockBasket: {
        value: 5,
        label: 'Winners Stock Basket',
        sequence: 5
      },
      consumerStockBasket: {
        value: 6,
        label: 'Consumer Stock Basket',
        sequence: 6
      },
      financialStockBasket: {
        value: 7,
        label: 'Financial Stock Basket',
        sequence: 7
      }
    },
    MODELPORTFOLIOFLOW: {
      instrument: {
        value: 1,
        label: 'instrument',
        sequence: 1
      },
      noninstrument: {
        value: 2,
        label: 'noninstrument',
        sequence: 2
      }
    },
    INTERESTPAYOUTFREQUENCYCODE: {
      maturity: {
        value: 1,
        label: 'MATURITY',
        sequence: 1
      },
      daily: {
        value: 2,
        label: 'DAILY',
        sequence: 2
      },
      weekly: {
        value: 3,
        label: 'WEEKLY',
        sequence: 3
      },
      monthly: {
        value: 4,
        label: 'MONTHLY',
        sequence: 4
      },
      biMonthly: {
        value: 5,
        label: 'BIMONTHLY',
        sequence: 5
      },
      quarterly: {
        value: 6,
        label: 'QUARTERLY',
        sequence: 6
      },
      halfYearly: {
        value: 7,
        label: 'HALFYEARLY',
        sequence: 7
      },
      yearly: {
        value: 8,
        label: 'YEARLY',
        sequence: 8
      }
    },
    COMPOUNDINGPAYOUTFREQUENCY: {
      maturity: {
        value: 1,
        label: 'MATURITY',
        sequence: 1
      },
      daily: {
        value: 2,
        label: 'DAILY',
        sequence: 2
      },
      weekly: {
        value: 3,
        label: 'WEEKLY',
        sequence: 3
      },
      monthly: {
        value: 4,
        label: 'MONTHLY',
        sequence: 4
      },
      biMonthly: {
        value: 5,
        label: 'BIMONTHLY',
        sequence: 5
      },
      quarterly: {
        value: 6,
        label: 'QUARTERLY',
        sequence: 6
      },
      halfYearly: {
        value: 7,
        label: 'HALFYEARLY',
        sequence: 7
      },
      yearly: {
        value: 8,
        label: 'YEARLY',
        sequence: 8
      }
    },
    COMMUNICATIONCATEGORY: {
      TRANSACTIONAL: {
        value: 1,
        label: 'transactional',
        sequence: 1
      },
      PROMOTIONAL: {
        value: 2,
        label: 'promotional',
        sequence: 2
      }
    },
    TWOFACTORAUTH: {
      sms: {
        value: 1,
        label: 'SMS'
      },
      email: {
        value: 2,
        label: 'EMAIL'
      },
      both: {
        value: 3,
        label: 'BOTH'
      }
    },
    INSTRUMENTSEXPORTFILESTATUS: {
      pending: {
        value: 1,
        label: 'Pending',
        sequence: 1
      },
      generated: {
        value: 2,
        label: 'Generated',
        sequence: 2
      },
      failed: {
        value: 3,
        label: 'Failed',
        sequence: 3
      }
    },
    PIIFIELDSTOMASK: [
      'otp',
      'contactNumber',
      'accountName',
      'appUserName',
      'appUserEmail',
      'bankAccountName',
      'bankAccountNumber',
      'familyName',
      'appUserContactNumber',
      'investorName',
      'pan',
      'guardianPan',
      'terCategory',
      'name',
      'landmark',
      'token',
      'refreshToken',
      'transactionSms',
      'transactionEmail',
      'transactionPushnotification',
      'upcomingPaymentsEmail',
      'upcomingPaymentsPushnotification',
      'rebalanceSms',
      'rebalanceEmail',
      'email',
      'updatedEmail',
      'updatedContactNumber',
      'dematAccNumber',
      'dematDpId',
      'accountNumber',
      'publicKey',
      'biometricToken',
      'panCardNumber',
      'registrationToken',
      'addressLine1',
      'addressLine2',
      'addressLine3',
      'fullAddress',
      'message',
      'tncAcceptanceIpAddress',
      'oneTimePassword',
      'identificationNumber',
      'tanCardNumber',
      'comment'
    ],
    URIEXCLUSIONFROMHTTPACCESSLOGS: ['/ping', '/AppAccessToken'],

    EMAILCONTACTBELONGSTO: {
      self: {
        value: 1,
        label: 'Self',
        code: 'SE'
      },
      spouse: {
        value: 2,
        label: 'Spouse',
        code: 'SP'
      },
      dependentchildren: {
        value: 3,
        label: 'Dependent Children',
        code: 'DC'
      },
      dependentsiblings: {
        value: 4,
        label: 'Dependent Siblings',
        code: 'DS'
      },
      dependentparents: {
        value: 5,
        label: 'Dependent Parents',
        code: 'DP'
      },
      guardian: {
        value: 6,
        label: 'Guardian',
        code: 'GD'
      },
      pms: {
        value: 7,
        label: 'PMS',
        code: 'PM'
      },
      custodian: {
        value: 8,
        label: 'Custodian',
        code: 'CD'
      },
      poa: {
        value: 9,
        label: 'POA',
        code: 'PO'
      }
    },

    APPUSERSTATUSVALIDATIONURLS: {
      'setupMpin': {
        states: ['PINSetupCompleted']
      },
      'updatePANOrDOB': {
        states: ['advisoryUser', 'wealthfyDomesticUser', 'singleCustomerID', 'multipleCustomerID', 'NTBUser']
      },
      'handleIdcomcallback': {
        states: ['NTBUser', 'IDCOMVerified', 'wealthfyDomesticUser', 'advisoryUser',]
      },
      'updateBankAccountDetailsById': {
        states: ['bankAccountIsReady']
      },
      'updateProfessionalDetails': {
        states: ['FATCAReady']
      },
      'skippedNominee': {
        states: ['nomineeCompleted']
      },
      'investmentAccountCreated': {
        states: ['investmentAccountReady']
      },
      'checkEkycStatus': {
        states: ['userRegistered']
      },
      'updateDecleration': {
        states: ['declarationCompleted']
      }
    },
    REQUESTTOENGINESTATUS: {
      initaited: {
        value: 1,
        label: 'Initiated'
      },
      processing: {
        value: 2,
        label: 'Processing'
      },
      completed: {
        value: 3,
        label: 'Completed'
      },
      failed: {
        value: 4,
        label: 'Failed'
      },
    },
    WMSGENERICMESSAGES : {
      technicalError : {
        value: 1,
        label : 'Technical Error',
        message : 'Oops! You have experienced a Technical Error(CUST_ERR_CODE)'
      },
      customerError : {
        value: 2,
        label : 'Customer Error',
        message : 'Customer Error'
      }
    },
    // PANAADHARLINKSTATUS: {
    //   notFound: {
    //     value: 1,
    //     label: 'NotFound'
    //   },
    //   pending: {
    //     value: 2,
    //     label: 'Pending'
    //   },
    //   operative: {
    //     value: 3,
    //     label: 'Operative'
    //   },
    //   nonOperative: {
    //     value: 4,
    //     label: 'Non Operative'
    //   },
    // },

    DEBITAPISTATUS : {
      successful : {
        value : 1,
        label : "Successful"
      },
      functionalerror : {
        value : 2,
        label : "Functional Error"
      },
      timeout : {
        value : 3,
        label : "Timeout"
      },
      genericerror : {
        value : 4,
        label : "Generic Error"
      }
    }
  };
}

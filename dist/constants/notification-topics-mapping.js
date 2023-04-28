"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTopics = void 0;
class NotificationTopics {
}
exports.NotificationTopics = NotificationTopics;
NotificationTopics.TOPICS = {
    broadcast: {
        nonTransactedClients: {
            value: 56,
            topic: 'Non Transacted Clients'
        }
    },
    cas: {
        forwardCASemail: {
            value: 48,
            topic: 'Forward CAS email'
        },
        processing: {
            value: 49,
            topic: 'CAS- If CAS processing took time, we will notify once done'
        },
        processedSuccessfully: {
            value: 50,
            topic: 'CAS- Processed successfully'
        },
        generateOTP: {
            value: 51,
            topic: 'CAS generate OTP - Prelogin'
        }
    },
    familyDashboard: {
        memberAddition: {
            value: 52,
            topic: 'Member Addition- If member X adds member Y to the family, notification will be triggered to member Y'
        },
        memberDeletion: {
            value: 53,
            topic: 'Member Deletion- If member X removes member Y from the family, notification will be triggered to member Y'
        },
        selfDeletion: {
            value: 54,
            topic: 'Self Deletion- If member Y removes self from X, then notification will be triggered to X'
        }
    },
    generic: {
        birthdayWishes: {
            value: 7,
            topic: 'Birthday Wishes'
        },
        holidayWishes: {
            value: 8,
            topic: 'Festival/National holiday Wishes '
        },
        otp: {
            value: 9,
            topic: 'OTP'
        },
        alert: {
            value: 70,
            topic: 'Maturity alert/Expiry'
        },
        exitFund: {
            value: 71,
            topic: 'Exit funds within portfolio'
        },
        freezeFund: {
            value: 72,
            topic: 'Freeze funds within portfolio'
        }
    },
    intimationMessage: {
        nfo: {
            value: 58,
            topic: 'Intimation of  a New fund offer NFO'
        },
        fdRates: {
            value: 59,
            topic: 'Intimation on change in fixed deposit rates'
        },
        sgb: {
            value: 60,
            topic: 'Intimation on opening and closing dates of SGBs'
        }
    },
    investmentAccount: {
        accountOpened: {
            value: 10,
            topic: 'Successful - Investment Account Registration/Opened '
        },
        accountClosed: {
            value: 11,
            topic: 'Successful - Investment Account Closure'
        },
        kycComplete: {
            value: 12,
            topic: 'Complete investment account -KYC'
        },
        minorTurningMajor: {
            value: 73,
            topic: 'Minor turning major intimation'
        },
        upadateContact: {
            value: 74,
            topic: 'Updation of contact & email id'
        },
        customerModification: {
            value: 75,
            topic: 'Customer modification- name, tax status change'
        },
        updateNominee: {
            value: 76,
            topic: 'Updation of nominee details'
        }
    },
    investmentCart: {
        cartInstrument: {
            value: 43,
            topic: 'Cart-Instruments in Cart but didn’t buy'
        }
    },
    kyc: {
        rejected: {
            value: 13,
            topic: 'KRA – KYC Registration Status - Rejected'
        },
        success: {
            value: 14,
            topic: 'KRA – KYC Registration Status - Success'
        }
    },
    login: {
        mpin: {
            value: 1,
            topic: 'MPIN setup or Forced Changed MPIN or Generate New MPIN or Change MPIN'
        },
        otp: {
            value: 2,
            topic: ' OTP for MPIN'
        },
        askReset: {
            value: 3,
            topic: 'Nudge asking customer to reset the MPIN as its about to expire'
        },
        enableBiometric: {
            value: 4,
            topic: 'Enabled Biometric authentication'
        },
        disableBiometric: {
            value: 5,
            topic: 'Disabled Biometric authentication'
        }
    },
    milestoneAchieved: {
        reachedMilestone: {
            value: 67,
            topic: 'Intimating if customer reached specific milestones (25% - 50 % & Goal Achieved )'
        }
    },
    mutualFund: {
        lumpsumPurchase: {
            value: 23,
            topic: 'Lumpsum - Purchase'
        },
        lumpsumRejected: {
            value: 24,
            topic: 'Lumpsum - Rejected '
        },
        sipRegistration: {
            value: 25,
            topic: 'SIP registration'
        },
        sipRequestPlaced: {
            value: 26,
            topic: 'SIP request placed'
        },
        sipPaused: {
            value: 27,
            topic: 'SIP Paused'
        },
        sipStopCancel: {
            value: 28,
            topic: 'SIP Stop/ Cancel'
        },
        sipResume: {
            value: 29,
            topic: 'SIP Resume'
        },
        sipDue: {
            value: 30,
            topic: 'SIP Due'
        },
        sipRejected: {
            value: 31,
            topic: 'SIP Rejected (Insufficient funds, Other reasons)'
        },
        switchRequestPlaced: {
            value: 32,
            topic: 'Switch Request Placed'
        },
        switchRequestFailure: {
            value: 33,
            topic: 'Switch request failure'
        },
        stpRegistration: {
            value: 34,
            topic: 'STP registration'
        },
        stpRequestPlaced: {
            value: 35,
            topic: 'STP request placed'
        },
        stpRequestStop: {
            value: 36,
            topic: 'STP request Stop/cancelled'
        },
        stpRequestFailure: {
            value: 37,
            topic: 'STP request failure'
        },
        swpRegistration: {
            value: 38,
            topic: 'SWP registration'
        },
        swpRequestPlaced: {
            value: 39,
            topic: 'SWP request placed'
        },
        swpRequestCancelled: {
            value: 40,
            topic: 'SWP request cancelled'
        },
        swpRequestFailure: {
            value: 41,
            topic: 'SWP request failure'
        },
        redemptionRequestPlaced: {
            value: 42,
            topic: 'Redemption request Placed'
        }
    },
    onboarding: {
        blockCustomer: {
            value: 6,
            topic: 'When existing Wealthfy Domestic block customer (customer is blocked from accessing this portal if he has ISA / PBG / PBGP)tries to login in Wealth App'
        }
    },
    portfolio: {
        fundManager: {
            value: 68,
            topic: 'Change in fund manager'
        },
        attributes: {
            value: 69,
            topic: 'Change in attributes, portfolio default'
        }
    },
    promotionalMessages: {
        promotionalIntimation: {
            value: 61,
            topic: 'App should have an provision for sending promotional intimation/App update '
        },
        appUpdate: {
            value: 62,
            topic: 'New app update'
        },
        maintenance: {
            value: 63,
            topic: 'Scheduled maintenance'
        },
        regulatoryAlert: {
            value: 64,
            topic: 'Regulatory alert'
        },
        featureAlert: {
            value: 65,
            topic: 'New feature alert'
        },
        promotionalAlert: {
            value: 66,
            topic: 'Promotional alert'
        }
    },
    rebalancing: {
        pendingRebalancing: {
            value: 57,
            topic: 'Pending Rebalancing Clients who have not opted for rebalancing the last 6 months / 1 year'
        }
    },
    reports: {
        accountStatement: {
            value: 44,
            topic: 'Request for Account Statement'
        },
        holding: {
            value: 45,
            topic: 'Request for Holding '
        },
        capitalGain: {
            value: 46,
            topic: 'Request for Capital Gain'
        },
        elss: {
            value: 47,
            topic: 'Request for ELSS '
        }
    },
    riskProfile: {
        notUpdated: {
            value: 15,
            topic: 'Notifying if risk profile is not updated '
        },
        set: {
            value: 16,
            topic: 'Success - Set Risk profile '
        },
        modify: {
            value: 17,
            topic: 'Success - Modify Risk profile'
        },
        expiring: {
            value: 18,
            topic: 'When Risk Profile is expiring'
        },
        expired: {
            value: 19,
            topic: 'When Risk Profile is expired'
        }
    },
    transactionOTP: {
        otp: {
            value: 20,
            topic: 'OTP related to MF transaction (Purchase, Redeem, Switch,STP & SWP)'
        }
    },
    transcationFailed: {
        incorrectOTP: {
            value: 21,
            topic: 'Incorrect OTP'
        },
        insufficientBalance: {
            value: 22,
            topic: 'Insufficient Balance'
        }
    },
    valuationIntimation: {
        quarterValuation: {
            value: 55,
            topic: 'Portfolio Valuation End of quarter valuation'
        }
    }
};
NotificationTopics.OTP_MESSAGES = {
    onboardingOTP: {
        id: 2,
        category: 'TRANSACTIONAL',
        subCategory: 'Login',
        topic: 'OTP for MPIN',
        createdDate: new Date(),
        description: '',
        modeEmail: true,
        modeSms: true,
        modePush: false,
        toggleNotification: true,
        lastModifiedDate: new Date(),
        tempId: '1107167220723431431',
        emailTemplate: `Dear <%=customerName%>,

        <%=otp%> is your OTP to validate your mobile number with HDFC Bank SmartWealth App Use this to verify and reset your MPIN.

        Regards,
        HDFC Bank SmartWealth`,
        smsTemplate: `<%=otp%> is your OTP to set your HDFC Bank SmartWealth App 4 Digit Login MPIN.\nNever share OTP`
    },
    transactionOTP: {
        id: 20,
        category: 'TRANSACTIONAL',
        subCategory: 'Transaction OTP',
        topic: 'OTP related to MF transaction (Purchase, Redeem, Switch,STP & SWP)',
        createdDate: new Date(),
        description: '',
        modeEmail: true,
        modeSms: true,
        modePush: false,
        toggleNotification: true,
        lastModifiedDate: new Date(),
        tempId: '1107167220803013936',
        emailTemplate: `

        Dear <%=customerName%>,

        <%=otp%> is your OTP to authenticate your MF <%=transactionFlag%> from HDFC Bank SmartWealth App.

        Never share your OTP with anyone.

        Regards,
        HDFC Bank SmartWealth
        `,
        emailSubject: 'OTP authenticate transaction for you HDFC Bank SmartWealth app',
        smsTemplate: `<%=otp%> is your OTP to authenticate your MF <%=transactionFlag%> from HDFC Bank SmartWealth.\nNever share OTP`
    },
    transaction2FAOTP: {
        id: 20,
        category: 'TRANSACTIONAL',
        subCategory: 'Transaction OTP',
        topic: 'OTP related to MF transaction (Purchase, Redeem, Switch,STP & SWP)',
        createdDate: new Date(),
        description: '',
        modeEmail: true,
        modeSms: true,
        modePush: false,
        toggleNotification: true,
        lastModifiedDate: new Date(),
        tempId: '1107168050746671964',
        emailTemplate: `
      Dear <%=customerName%>,~~<%=otp%> is your OTP for your Mutual Fund transaction initiated on HDFC SmartWealth App under the following details:~~Fund Name - <%=schemeNames%>~Date - <%=date%>~Time - <%=time%>~~This OTP is valid for 2 minutes.~Please don't share your OTP with anyone.~~Thanks & Regards,~HDFC SmartWealth Team`,
        emailSubject: 'OTP authenticate transaction for you HDFC Bank SmartWealth app',
        smsTemplate: `<%=otp%> is your OTP for the Mutual Fund transaction initiated on HDFC Bank SmartWealth App. Valid for 2 mins.\nNEVER share OTP.`
    }
};
NotificationTopics.INVESTOR_WITHOUT_ACCOUNT = 'INVESTOR_WITHOUT_ACCOUNT';
//# sourceMappingURL=notification-topics-mapping.js.map
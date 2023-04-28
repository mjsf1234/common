export declare abstract class NotificationTopics {
    static readonly TOPICS: {
        broadcast: {
            nonTransactedClients: {
                value: number;
                topic: string;
            };
        };
        cas: {
            forwardCASemail: {
                value: number;
                topic: string;
            };
            processing: {
                value: number;
                topic: string;
            };
            processedSuccessfully: {
                value: number;
                topic: string;
            };
            generateOTP: {
                value: number;
                topic: string;
            };
        };
        familyDashboard: {
            memberAddition: {
                value: number;
                topic: string;
            };
            memberDeletion: {
                value: number;
                topic: string;
            };
            selfDeletion: {
                value: number;
                topic: string;
            };
        };
        generic: {
            birthdayWishes: {
                value: number;
                topic: string;
            };
            holidayWishes: {
                value: number;
                topic: string;
            };
            otp: {
                value: number;
                topic: string;
            };
            alert: {
                value: number;
                topic: string;
            };
            exitFund: {
                value: number;
                topic: string;
            };
            freezeFund: {
                value: number;
                topic: string;
            };
        };
        intimationMessage: {
            nfo: {
                value: number;
                topic: string;
            };
            fdRates: {
                value: number;
                topic: string;
            };
            sgb: {
                value: number;
                topic: string;
            };
        };
        investmentAccount: {
            accountOpened: {
                value: number;
                topic: string;
            };
            accountClosed: {
                value: number;
                topic: string;
            };
            kycComplete: {
                value: number;
                topic: string;
            };
            minorTurningMajor: {
                value: number;
                topic: string;
            };
            upadateContact: {
                value: number;
                topic: string;
            };
            customerModification: {
                value: number;
                topic: string;
            };
            updateNominee: {
                value: number;
                topic: string;
            };
        };
        investmentCart: {
            cartInstrument: {
                value: number;
                topic: string;
            };
        };
        kyc: {
            rejected: {
                value: number;
                topic: string;
            };
            success: {
                value: number;
                topic: string;
            };
        };
        login: {
            mpin: {
                value: number;
                topic: string;
            };
            otp: {
                value: number;
                topic: string;
            };
            askReset: {
                value: number;
                topic: string;
            };
            enableBiometric: {
                value: number;
                topic: string;
            };
            disableBiometric: {
                value: number;
                topic: string;
            };
        };
        milestoneAchieved: {
            reachedMilestone: {
                value: number;
                topic: string;
            };
        };
        mutualFund: {
            lumpsumPurchase: {
                value: number;
                topic: string;
            };
            lumpsumRejected: {
                value: number;
                topic: string;
            };
            sipRegistration: {
                value: number;
                topic: string;
            };
            sipRequestPlaced: {
                value: number;
                topic: string;
            };
            sipPaused: {
                value: number;
                topic: string;
            };
            sipStopCancel: {
                value: number;
                topic: string;
            };
            sipResume: {
                value: number;
                topic: string;
            };
            sipDue: {
                value: number;
                topic: string;
            };
            sipRejected: {
                value: number;
                topic: string;
            };
            switchRequestPlaced: {
                value: number;
                topic: string;
            };
            switchRequestFailure: {
                value: number;
                topic: string;
            };
            stpRegistration: {
                value: number;
                topic: string;
            };
            stpRequestPlaced: {
                value: number;
                topic: string;
            };
            stpRequestStop: {
                value: number;
                topic: string;
            };
            stpRequestFailure: {
                value: number;
                topic: string;
            };
            swpRegistration: {
                value: number;
                topic: string;
            };
            swpRequestPlaced: {
                value: number;
                topic: string;
            };
            swpRequestCancelled: {
                value: number;
                topic: string;
            };
            swpRequestFailure: {
                value: number;
                topic: string;
            };
            redemptionRequestPlaced: {
                value: number;
                topic: string;
            };
        };
        onboarding: {
            blockCustomer: {
                value: number;
                topic: string;
            };
        };
        portfolio: {
            fundManager: {
                value: number;
                topic: string;
            };
            attributes: {
                value: number;
                topic: string;
            };
        };
        promotionalMessages: {
            promotionalIntimation: {
                value: number;
                topic: string;
            };
            appUpdate: {
                value: number;
                topic: string;
            };
            maintenance: {
                value: number;
                topic: string;
            };
            regulatoryAlert: {
                value: number;
                topic: string;
            };
            featureAlert: {
                value: number;
                topic: string;
            };
            promotionalAlert: {
                value: number;
                topic: string;
            };
        };
        rebalancing: {
            pendingRebalancing: {
                value: number;
                topic: string;
            };
        };
        reports: {
            accountStatement: {
                value: number;
                topic: string;
            };
            holding: {
                value: number;
                topic: string;
            };
            capitalGain: {
                value: number;
                topic: string;
            };
            elss: {
                value: number;
                topic: string;
            };
        };
        riskProfile: {
            notUpdated: {
                value: number;
                topic: string;
            };
            set: {
                value: number;
                topic: string;
            };
            modify: {
                value: number;
                topic: string;
            };
            expiring: {
                value: number;
                topic: string;
            };
            expired: {
                value: number;
                topic: string;
            };
        };
        transactionOTP: {
            otp: {
                value: number;
                topic: string;
            };
        };
        transcationFailed: {
            incorrectOTP: {
                value: number;
                topic: string;
            };
            insufficientBalance: {
                value: number;
                topic: string;
            };
        };
        valuationIntimation: {
            quarterValuation: {
                value: number;
                topic: string;
            };
        };
    };
    static readonly OTP_MESSAGES: {
        onboardingOTP: {
            id: number;
            category: string;
            subCategory: string;
            topic: string;
            createdDate: Date;
            description: string;
            modeEmail: boolean;
            modeSms: boolean;
            modePush: boolean;
            toggleNotification: boolean;
            lastModifiedDate: Date;
            tempId: string;
            emailTemplate: string;
            smsTemplate: string;
        };
        transactionOTP: {
            id: number;
            category: string;
            subCategory: string;
            topic: string;
            createdDate: Date;
            description: string;
            modeEmail: boolean;
            modeSms: boolean;
            modePush: boolean;
            toggleNotification: boolean;
            lastModifiedDate: Date;
            tempId: string;
            emailTemplate: string;
            emailSubject: string;
            smsTemplate: string;
        };
        transaction2FAOTP: {
            id: number;
            category: string;
            subCategory: string;
            topic: string;
            createdDate: Date;
            description: string;
            modeEmail: boolean;
            modeSms: boolean;
            modePush: boolean;
            toggleNotification: boolean;
            lastModifiedDate: Date;
            tempId: string;
            emailTemplate: string;
            emailSubject: string;
            smsTemplate: string;
        };
    };
    static readonly INVESTOR_WITHOUT_ACCOUNT = "INVESTOR_WITHOUT_ACCOUNT";
}

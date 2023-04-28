import {Request} from '@loopback/rest';
import {CompareUtils} from '../../utils';

export class RoleResolver {
  private request: Request;
  private url: string;
  private modelName: string;
  private requestParams: any;
  private requestQuery: any;
  private pathId: string;
  private userProfile: any;

  constructor(requestObj: Request, userProfile: any) {
    this.request = requestObj;
    this.url = requestObj.url;
    this.modelName = this.url.split('/')[1];
    this.userProfile = userProfile;
    // if(requestObj.method === "GET")
    // this.requestQuery = JSON.parse(JSON.stringify(requestObj.query));
    this.requestQuery = requestObj.query
    // else if(requestObj.method in ["PUT","POST","DELETE","PATCH"])
    this.requestParams = requestObj.params.id || {id: this.url.split('/')[2]} || null;
  }

  //call this function to get the resolved roles
  public resolveRoles = (): Array<String> => {
    const roles: Array<string> = [];
    if (this.isOwner()) roles.push('$owner');
    if (this.isPrimaryAccountOwner()) roles.push('$primaryAccount');
    return roles;
  };

  private isOwner = (): boolean => {
    if (
      this.modelName == 'AppUser' ||
      this.modelName == 'CasRequest' ||
      this.modelName == 'AppUserNotification' ||
      this.modelName == 'UserNotificationToken' ||
      this.modelName == 'SystematicMethod' ||
      this.modelName == 'Device' ||
      this.modelName == 'Ekyc'
    ) {
      if (
        this.userProfile &&
        this.userProfile.appUserId &&
        this.requestParams &&
        this.requestParams.id &&
        this.userProfile.appUserId == this.requestParams.id
      ) {
        if (!this.requestQuery.contextFilter) {
          this.requestQuery.contextFilter = {};
        }

        if (
          !this.requestQuery.contextFilter.accountIds ||
          !Array.isArray(this.requestQuery.contextFilter.accountIds) ||
          this.requestQuery.contextFilter.accountIds.length == 0
        ) {
          this.requestQuery.contextFilter.accountIds = this.userProfile.accessibleAccountIds;
        } else if (!CompareUtils.isASupersetOfB(this.userProfile.accessibleAccountIds, this.requestQuery.contextFilter.accountIds)) {
          return false;
        }

        if (
          !this.requestQuery.contextFilter.appUserIds ||
          !Array.isArray(this.requestQuery.contextFilter.appUserIds) ||
          this.requestQuery.contextFilter.appUserIds.length == 0
        ) {
          this.requestQuery.contextFilter.appUserIds = this.userProfile.accessibleAppUserIds;
        } else if (!CompareUtils.isASupersetOfB(this.userProfile.accessibleAppUserIds, this.requestQuery.contextFilter.appUserIds)) {
          return false;
        }

        if (
          !this.requestQuery.contextFilter.familyIds ||
          !Array.isArray(this.requestQuery.contextFilter.familyIds) ||
          this.requestQuery.contextFilter.familyIds.length == 0
        ) {
          this.requestQuery.contextFilter.familyIds = this.userProfile.accessibleFamilyIds;
        } else if (!CompareUtils.isASupersetOfB(this.userProfile.accessibleFamilyIds, this.requestQuery.contextFilter.familyIds)) {
          return false;
        }

        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  private isPrimaryAccountOwner = (): boolean => {
    if (
      this.modelName == 'Account' ||
      this.modelName == 'AccountAnalytics' ||
      this.modelName == 'Cart' ||
      this.modelName == 'Deposit' ||
      this.modelName == 'Goal' ||
      this.modelName == 'Recommendation' ||
      this.modelName == 'HoldingsReporting' ||
      this.modelName == 'rebalancing' ||
      this.modelName == 'BankAccount' ||
      this.modelName == 'InvestorNominee' ||
      this.modelName == 'AccountReferral' ||
      this.modelName == 'SystematicMethod' ||
      this.modelName == 'DepositDetails'  ||
      this.modelName == 'CommunicationMatrix'
      ) {
      if (
        this.userProfile &&
        this.userProfile.primaryAccountIds &&
        this.userProfile.primaryAccountIds.length > 0 &&
        this.requestParams &&
        this.requestParams.id &&
        !isNaN(parseInt(this.requestParams.id))
      ) {
        if (this.userProfile.primaryAccountIds.indexOf(parseInt(this.requestParams.id)) > -1) {
          if (!this.requestQuery.contextFilter) {
            this.requestQuery.contextFilter = {};
          }
          if (typeof this.requestQuery.contextFilter === 'string') {
            this.requestQuery.contextFilter = JSON.parse(this.requestQuery.contextFilter);
          }
          if (
            !this.requestQuery.contextFilter.accountIds ||
            !Array.isArray(this.requestQuery.contextFilter.accountIds) ||
            this.requestQuery.contextFilter.accountIds.length == 0
          ) {
            this.requestQuery.contextFilter.accountIds = this.userProfile.accessibleAccountIds;
          } else if (!CompareUtils.isASupersetOfB(this.userProfile.accessibleAccountIds, this.requestQuery.contextFilter.accountIds)) {
            return false;
          }

          if (
            !this.requestQuery.contextFilter.appUserIds ||
            !Array.isArray(this.requestQuery.contextFilter.appUserIds) ||
            this.requestQuery.contextFilter.appUserIds.length == 0
          ) {
            this.requestQuery.contextFilter.appUserIds = this.userProfile.accessibleAppUserIds;
          } else if (!CompareUtils.isASupersetOfB(this.userProfile.accessibleAppUserIds, this.requestQuery.contextFilter.appUserIds)) {
            return false;
          }

          if (
            !this.requestQuery.contextFilter.familyIds ||
            !Array.isArray(this.requestQuery.contextFilter.familyIds) ||
            this.requestQuery.contextFilter.familyIds.length == 0
          ) {
            this.requestQuery.contextFilter.familyIds = this.userProfile.accessibleFamilyIds;
          } else if (!CompareUtils.isASupersetOfB(this.userProfile.accessibleFamilyIds, this.requestQuery.contextFilter.familyIds)) {
            return false;
          }

          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
}

import { AppUserRepository } from '..';
export declare const checkAppUserStatus: (targetState: string | Array<string>, appUserRepository: AppUserRepository, appUserId: number) => Promise<{
    acceptanceFlag: boolean;
    appUserStatus: number | undefined;
} | undefined>;

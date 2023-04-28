export declare abstract class ActiveDirectoryConfig {
    static getADConfig(): {
        url: string;
        baseDN: string;
        username: string;
        password: string;
        domain: string;
    };
}

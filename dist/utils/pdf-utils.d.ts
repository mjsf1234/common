export declare abstract class PDFUtils {
    static toPDF(html: string, options: any, output: any): Promise<any>;
    static makePDF(data: any, options: any, outputPath: any): Promise<any>;
    static createSignaturesSection(data: any): any;
    static createDeclarationSection(data: any): any;
    static createHolderInformation(data: any, holderType: string): any;
    static getAddressFATCA(investorDetails: any, panValue: string): any;
    static getFATCASection(investorDetails: any, panValue: any): any;
    static createNomineeSection(nomineeCount: number, investorNominee: any): any;
    static getAddressSection(addressPrefix: any, address: any): any;
    static createEmptyNomineeSection(): any;
    static createSection(sectionHeader: string, rowsData: Array<any>): any;
    static getTwoFieldsRow(fieldObjectArray: Array<any>): any;
    static getSingleFieldRow(fieldObjectArray: Array<any>): any;
    static getFieldFormatted(fieldObject: any, hasLabel: boolean): any;
}

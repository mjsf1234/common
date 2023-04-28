export declare abstract class PathParamsValidations {
    static idValidations(id: number | undefined): void;
    static limitValidations(limit: number | undefined): void;
    static genericNumericValidations(numericParam: number | undefined, required?: boolean): void;
}

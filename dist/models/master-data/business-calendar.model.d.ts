import { BaseSQLModel } from '..';
export declare class BusinessCalendar extends BaseSQLModel {
    date: Date;
    day?: string;
    businessDayEquity?: number;
    businessDayFixedIncome?: number;
    businessDayImplementation?: number;
    [prop: string]: any;
    constructor(data?: Partial<BusinessCalendar>);
}
export interface BusinessCalendarRelations {
}
export declare type BusinessCalendarWithRelations = BusinessCalendar & BusinessCalendarRelations;

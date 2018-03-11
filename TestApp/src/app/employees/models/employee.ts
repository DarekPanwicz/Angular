import {Details} from "./detail";

export interface Employee {
    id: number;
    firstName:string;
    lastName:string;
    dateOfBirth: string;
    active: boolean;
    details: Details
}
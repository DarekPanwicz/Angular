import {Details} from "./detail";

export interface Employee {
    id: number;
    firstName:string;
    lastName:string;
    dateOfBirth: number;
    active: boolean;
    details: Details
}
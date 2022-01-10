import { Document } from 'mongoose';
export interface IADMIN extends Document {
    FirstName: string;
    LastName: string;
    Desgination: string;
    cell: string;
    JoinDate: string;
    adress: string;
    createdAt?: string;
    updatedAt?: string;
}

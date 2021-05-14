import { Document } from 'mongoose';
export declare type PropertyDocument = Property & Document;
export declare class Property {
    id: number;
    kind: string;
    location: string;
    bedrooms: number;
    area: number;
}
export declare const PropertySchema: import("mongoose").Schema<Document<Property, any>, import("mongoose").Model<any, any, any>, undefined>;

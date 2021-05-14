import { Document } from 'mongoose';
import { Property } from '../../properties/shemas/property.schema';
export declare type OfferDocument = Offer & Document;
export declare class Offer {
    id: number;
    offered_by: string;
    price: number;
    property: Property;
}
export declare const OfferSchema: import("mongoose").Schema<Document<Offer, any>, import("mongoose").Model<any, any, any>, undefined>;

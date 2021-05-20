import { ObjectID } from 'typeorm';
export declare class Properties {
    _id: ObjectID;
    id: number;
    kind: string;
    location: string;
    bedrooms: number;
    area: number;
    constructor(properties?: Partial<Properties>);
}

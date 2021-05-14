import { CreatePropertyDto } from "./dto/create-property.dto";
import { Model } from "mongoose";
import { Property, PropertyDocument } from "./shemas/property.schema";
import { UpdatePropertyDto } from "./dto/update-property.dto";
export declare class PropertiesService {
    private propertyModel;
    constructor(propertyModel: Model<PropertyDocument>);
    getAll(): Promise<Property[]>;
    getOne(id: number): Promise<PropertyDocument>;
    create(propertyDto: CreatePropertyDto): Promise<Property>;
    remove(id: number): Promise<PropertyDocument>;
    update(id: string, propertyDto: UpdatePropertyDto): Promise<PropertyDocument>;
}

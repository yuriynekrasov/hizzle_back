import { Injectable } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model} from "mongoose";
import { Property, PropertyDocument } from "./shemas/property.schema";
import { UpdatePropertyDto } from "./dto/update-property.dto";

@Injectable()
export class PropertiesService {
    constructor(@InjectModel(Property.name) private propertyModel: Model<PropertyDocument>) {}

    async getAll(): Promise<Property[]> {
        return this.propertyModel.find().exec()
    }

    async getOne(id: number) {
        return this.propertyModel.findById(id)
    }

    async create(propertyDto: CreatePropertyDto): Promise<Property> {
        const newProperty = new this.propertyModel(propertyDto)
        return newProperty.save()
    }

    async remove(id: number) {
        return this.propertyModel.findByIdAndRemove(id)
    }

    async update(id: string, propertyDto: UpdatePropertyDto) {
        return this.propertyModel.findByIdAndUpdate(id, propertyDto, {new: true})
    }
}
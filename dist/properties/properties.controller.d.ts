import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertiesService } from './properties.service';
import { Property } from './shemas/property.schema';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    getAll(): Promise<Property[]>;
    getOne(params: any): Promise<import("./shemas/property.schema").PropertyDocument>;
    create(createPropertyDto: CreatePropertyDto): Promise<Property>;
    remove(params: any): Promise<import("./shemas/property.schema").PropertyDocument>;
    update(updatePropertyDto: UpdatePropertyDto, params: any): Promise<import("./shemas/property.schema").PropertyDocument>;
}

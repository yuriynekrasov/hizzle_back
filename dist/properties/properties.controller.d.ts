import { Properties } from './entity/property.entity';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from '../properties/dto/create-property.dto';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertiesService);
    getAll(): Promise<Properties[]>;
    create(createPropertyDto: CreatePropertyDto): Promise<Properties>;
}

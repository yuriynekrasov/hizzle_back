import { Repository } from 'typeorm';
import { Properties } from './entity/property.entity';
export declare class PropertiesService {
    private propertyRepository;
    constructor(propertyRepository: Repository<Properties>);
    getAll(): Promise<Properties[]>;
    create(properties: Partial<Properties>): Promise<Properties>;
}

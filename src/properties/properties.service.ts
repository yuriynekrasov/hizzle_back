import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Properties } from './entity/property.entity';

@Injectable()
export class PropertiesService {
    constructor(
        @InjectRepository(Properties)
        private propertyRepository: Repository<Properties>
    ) {}

    async getAll(): Promise<Properties[]> {
        return this.propertyRepository.find();
    }

    async create(@Body() properties: Partial<Properties>): Promise<Properties> {
        return await this.propertyRepository.save(new Properties(properties));
    }
}
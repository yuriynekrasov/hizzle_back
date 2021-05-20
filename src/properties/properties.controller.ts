import { Controller, Get, Body, Post } from '@nestjs/common';
import { Properties } from './entity/property.entity';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from '../properties/dto/create-property.dto';

@Controller('properties')
export class PropertyController {

    constructor(private readonly propertyService: PropertiesService) {
    }

    @Get()
    getAll(): Promise<Properties[]> {
        return this.propertyService.getAll();
    }

    @Post()
    create(@Body() createPropertyDto: CreatePropertyDto) {
        return this.propertyService.create(createPropertyDto);
    }
}
import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertiesService } from './properties.service';
import { Property } from './shemas/property.schema';

@Controller('properties')
export class PropertiesController {

    constructor(private readonly propertiesService: PropertiesService) {
    }

    @Get()
    getAll(): Promise<Property[]> {
        return this.propertiesService.getAll()
    }

    @Get(':id')
    getOne(@Param() params) {
        return this.propertiesService.getOne(params.id)
    }

    @Post()
    create(@Body() createPropertyDto: CreatePropertyDto) {
        return this.propertiesService.create(createPropertyDto)
    }

    @Delete(':id')
    remove(@Param() params) {
        return this.propertiesService.remove(params.id)
    }

    @Put(':id')
    update(@Body() updatePropertyDto: UpdatePropertyDto, @Param() params) {
        return this.propertiesService.update(params.id, updatePropertyDto)
    }
}

import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertyController } from './properties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Properties } from './entity/property.entity';

@Module({
    imports: [ TypeOrmModule.forFeature([ Properties ]) ],
    providers: [ PropertiesService ],
    controllers: [ PropertyController ],
})

export class PropertiesModule {}
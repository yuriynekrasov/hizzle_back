import { Module } from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Property, PropertySchema } from "./shemas/property.schema";

@Module({
    providers: [ PropertiesService ],
    controllers: [ PropertiesController ],
    imports: [
        MongooseModule.forFeature([
            { name: Property.name, schema: PropertySchema  }
        ])
    ]
})

export class PropertiesModule {

}
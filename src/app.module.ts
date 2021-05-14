import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';
import { PropertiesModule } from "./properties/properties.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [ PropertiesModule, OffersModule, MongooseModule.forRoot('mongodb+srv://Bogdan:Incode2015@cluster0.6kpev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') ],
    controllers: [ AppController ],
    providers: [ AppService ],
})

export class AppModule {

}

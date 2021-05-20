import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';
import { PropertiesModule } from './properties/properties.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        OffersModule,
        PropertiesModule,
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb+srv://Bogdan:Incode2015@cluster0.6kpev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            // useNewUrlParser: true,
            // synchronize: true,
            logging: true,
            useUnifiedTopology: true,
            // ssl: true,
            entities: [
                "dist/**/*.entity{.ts,.js}"
            ]
        }) ],
    controllers: [ AppController ],
    providers: [ AppService ],
})

export class AppModule {

}

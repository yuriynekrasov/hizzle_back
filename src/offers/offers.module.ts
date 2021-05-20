import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offers } from './entity/offer.entity';

@Module({
    imports: [ TypeOrmModule.forFeature([ Offers ]) ],
    providers: [ OffersService ],
    controllers: [ OffersController ],
})

export class OffersModule {}
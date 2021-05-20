import { Controller, Get, Post, } from '@nestjs/common';
import { Offers } from './entity/offer.entity';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {

    constructor(private readonly offersService: OffersService) {
    }

    @Get()
    getAll(): Promise<Offers[]> {
        return this.offersService.getAll()
    }

}

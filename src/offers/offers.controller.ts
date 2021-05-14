import { Body, Controller, Get, Post } from '@nestjs/common';
import { Offer } from './schemas/offer.schema';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {

    constructor(private readonly offersService: OffersService) {
    }

    @Get()
    getAll(): Promise<Offer[]> {
        return this.offersService.getAll()
    }

    @Post()
    create(@Body() createOfferDto: CreateOfferDto) {
        return this.offersService.create(createOfferDto)
    }
}

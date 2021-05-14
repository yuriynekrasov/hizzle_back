import { Offer } from './schemas/offer.schema';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OffersService } from './offers.service';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    getAll(): Promise<Offer[]>;
    create(createOfferDto: CreateOfferDto): Promise<Offer>;
}

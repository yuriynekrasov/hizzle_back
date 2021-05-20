import { Offers } from './entity/offer.entity';
import { OffersService } from './offers.service';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    getAll(): Promise<Offers[]>;
}

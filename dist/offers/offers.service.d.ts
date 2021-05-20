import { Repository } from 'typeorm';
import { Offers } from './entity/offer.entity';
export declare class OffersService {
    private offerRepository;
    constructor(offerRepository: Repository<Offers>);
    getAll(): Promise<Offers[]>;
}

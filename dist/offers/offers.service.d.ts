import { CreateOfferDto } from './dto/create-offer.dto';
import { Model } from 'mongoose';
import { Offer, OfferDocument } from './schemas/offer.schema';
export declare class OffersService {
    private offerModel;
    constructor(offerModel: Model<OfferDocument>);
    getAll(): Promise<Offer[]>;
    create(offerDto: CreateOfferDto): Promise<Offer>;
}

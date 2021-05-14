import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer, OfferDocument } from './schemas/offer.schema';

@Injectable()
export class OffersService {
    constructor(@InjectModel(Offer.name) private offerModel: Model<OfferDocument>) {
    }

    async getAll(): Promise<Offer[]> {
        return this.offerModel.find().exec()
    }

    async create(offerDto: CreateOfferDto): Promise<Offer> {
        const newOffer = new this.offerModel(offerDto)
        return newOffer.save()
    }

}
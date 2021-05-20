import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offers } from './entity/offer.entity';

@Injectable()
export class OffersService {
    constructor(
        @InjectRepository(Offers)
        private offerRepository: Repository<Offers>
    ) {}

    async getAll(): Promise<Offers[]> {
        return this.offerRepository.find()
    }
}
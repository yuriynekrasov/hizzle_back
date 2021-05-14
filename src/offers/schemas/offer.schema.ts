import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Property, PropertySchema } from '../../properties/shemas/property.schema';

export type OfferDocument = Offer & Document

@Schema()
export class Offer {
    @Prop()
    id: number

    @Prop()
    offered_by: string

    @Prop()
    price: number

    @Prop({ type: PropertySchema })
    property: Property
}

export const OfferSchema = SchemaFactory.createForClass(Offer)
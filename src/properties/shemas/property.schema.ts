import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertyDocument = Property & Document

@Schema()
export class Property {
    @Prop()
    id: number

    @Prop()
    kind: string

    @Prop()
    location: string

    @Prop()
    bedrooms: number

    @Prop()
    area: number
}

export const PropertySchema = SchemaFactory.createForClass(Property)
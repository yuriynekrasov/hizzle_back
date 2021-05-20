import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Properties } from '../../properties/entity/property.entity';

@Entity()
export class Offers {
    @PrimaryColumn() _id: number;
    @Column() id: number;
    @Column() offered_by: string;
    @Column() price: number;
    @Column() property: Properties
}
import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Properties {
    @ObjectIdColumn() _id: ObjectID
    @Column() id: number
    @Column() kind: string
    @Column() location: string
    @Column() bedrooms: number
    @Column() area: number
    constructor(properties?: Partial<Properties>) {
        Object.assign(this, properties);
    }
}
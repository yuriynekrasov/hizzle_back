export class CreateOfferDto {
    id: number
    offered_by: string
    price: number
    property: {
        id: number
        kind: string
        location: string
        bedrooms: number
        area: number
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferSchema = exports.Offer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const property_schema_1 = require("../../properties/shemas/property.schema");
let Offer = class Offer {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Offer.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Offer.prototype, "offered_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Offer.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop({ type: property_schema_1.PropertySchema }),
    __metadata("design:type", property_schema_1.Property)
], Offer.prototype, "property", void 0);
Offer = __decorate([
    mongoose_1.Schema()
], Offer);
exports.Offer = Offer;
exports.OfferSchema = mongoose_1.SchemaFactory.createForClass(Offer);
//# sourceMappingURL=offer.schema.js.map
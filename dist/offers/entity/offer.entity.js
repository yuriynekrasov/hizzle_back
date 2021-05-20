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
exports.Offers = void 0;
const typeorm_1 = require("typeorm");
const property_entity_1 = require("../../properties/entity/property.entity");
let Offers = class Offers {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Offers.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Offers.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Offers.prototype, "offered_by", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Offers.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", property_entity_1.Properties)
], Offers.prototype, "property", void 0);
Offers = __decorate([
    typeorm_1.Entity()
], Offers);
exports.Offers = Offers;
//# sourceMappingURL=offer.entity.js.map
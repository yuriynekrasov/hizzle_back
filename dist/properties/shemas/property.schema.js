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
exports.PropertySchema = exports.Property = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Property = class Property {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Property.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Property.prototype, "kind", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Property.prototype, "location", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Property.prototype, "bedrooms", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Property.prototype, "area", void 0);
Property = __decorate([
    mongoose_1.Schema()
], Property);
exports.Property = Property;
exports.PropertySchema = mongoose_1.SchemaFactory.createForClass(Property);
//# sourceMappingURL=property.schema.js.map
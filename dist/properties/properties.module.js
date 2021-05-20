"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesModule = void 0;
const common_1 = require("@nestjs/common");
const properties_service_1 = require("./properties.service");
const properties_controller_1 = require("./properties.controller");
const typeorm_1 = require("@nestjs/typeorm");
const property_entity_1 = require("./entity/property.entity");
let PropertiesModule = class PropertiesModule {
};
PropertiesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([property_entity_1.Properties])],
        providers: [properties_service_1.PropertiesService],
        controllers: [properties_controller_1.PropertyController],
    })
], PropertiesModule);
exports.PropertiesModule = PropertiesModule;
//# sourceMappingURL=properties.module.js.map
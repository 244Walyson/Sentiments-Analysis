"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceService = void 0;
const common_1 = require("@nestjs/common");
let AudienceService = class AudienceService {
    create(createAudienceDto) {
        return 'This action adds a new audience';
    }
    findAll() {
        return `This action returns all audience`;
    }
    findOne(id) {
        return `This action returns a #${id} audience`;
    }
    update(id, updateAudienceDto) {
        return `This action updates a #${id} audience`;
    }
    remove(id) {
        return `This action removes a #${id} audience`;
    }
};
exports.AudienceService = AudienceService;
exports.AudienceService = AudienceService = __decorate([
    (0, common_1.Injectable)()
], AudienceService);
//# sourceMappingURL=audience.service.js.map
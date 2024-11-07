"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngagementService = void 0;
const common_1 = require("@nestjs/common");
let EngagementService = class EngagementService {
    create(createEngagementDto) {
        return 'This action adds a new engagement';
    }
    findAll() {
        return `This action returns all engagement`;
    }
    findOne(id) {
        return `This action returns a #${id} engagement`;
    }
    update(id, updateEngagementDto) {
        return `This action updates a #${id} engagement`;
    }
    remove(id) {
        return `This action removes a #${id} engagement`;
    }
};
exports.EngagementService = EngagementService;
exports.EngagementService = EngagementService = __decorate([
    (0, common_1.Injectable)()
], EngagementService);
//# sourceMappingURL=engagement.service.js.map
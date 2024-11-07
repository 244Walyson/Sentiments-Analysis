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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceController = void 0;
const common_1 = require("@nestjs/common");
const audience_service_1 = require("./audience.service");
const create_audience_dto_1 = require("./dto/create-audience.dto");
const update_audience_dto_1 = require("./dto/update-audience.dto");
let AudienceController = class AudienceController {
    constructor(audienceService) {
        this.audienceService = audienceService;
    }
    create(createAudienceDto) {
        return this.audienceService.create(createAudienceDto);
    }
    findAll() {
        return this.audienceService.findAll();
    }
    findOne(id) {
        return this.audienceService.findOne(+id);
    }
    update(id, updateAudienceDto) {
        return this.audienceService.update(+id, updateAudienceDto);
    }
    remove(id) {
        return this.audienceService.remove(+id);
    }
};
exports.AudienceController = AudienceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_audience_dto_1.CreateAudienceDto]),
    __metadata("design:returntype", void 0)
], AudienceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AudienceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AudienceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_audience_dto_1.UpdateAudienceDto]),
    __metadata("design:returntype", void 0)
], AudienceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AudienceController.prototype, "remove", null);
exports.AudienceController = AudienceController = __decorate([
    (0, common_1.Controller)('audience'),
    __metadata("design:paramtypes", [audience_service_1.AudienceService])
], AudienceController);
//# sourceMappingURL=audience.controller.js.map
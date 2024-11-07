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
exports.SentimentController = void 0;
const common_1 = require("@nestjs/common");
const sentiment_service_1 = require("./sentiment.service");
const create_sentiment_dto_1 = require("./dto/create-sentiment.dto");
const update_sentiment_dto_1 = require("./dto/update-sentiment.dto");
let SentimentController = class SentimentController {
    constructor(sentimentService) {
        this.sentimentService = sentimentService;
    }
    create(createSentimentDto) {
        return this.sentimentService.create(createSentimentDto);
    }
    findAll() {
        return this.sentimentService.findAll();
    }
    findOne(id) {
        return this.sentimentService.findOne(+id);
    }
    update(id, updateSentimentDto) {
        return this.sentimentService.update(+id, updateSentimentDto);
    }
    remove(id) {
        return this.sentimentService.remove(+id);
    }
};
exports.SentimentController = SentimentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sentiment_dto_1.CreateSentimentDto]),
    __metadata("design:returntype", void 0)
], SentimentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SentimentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SentimentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sentiment_dto_1.UpdateSentimentDto]),
    __metadata("design:returntype", void 0)
], SentimentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SentimentController.prototype, "remove", null);
exports.SentimentController = SentimentController = __decorate([
    (0, common_1.Controller)('sentiment'),
    __metadata("design:paramtypes", [sentiment_service_1.SentimentService])
], SentimentController);
//# sourceMappingURL=sentiment.controller.js.map
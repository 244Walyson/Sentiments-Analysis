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
exports.UpdateNetworkSentimentUseCase = void 0;
const common_1 = require("@nestjs/common");
const custom_exception_1 = require("../../exceptions/custom.exception");
const find_company_use_case_1 = require("../../company/use-cases/find-company.use-case");
const sentiment_by_network_response_dto_1 = require("../dto/sentiment-by-network/sentiment-by-network-response.dto");
let UpdateNetworkSentimentUseCase = class UpdateNetworkSentimentUseCase {
    constructor(sentimentByNetworkRepository, findCompanyUseCase) {
        this.sentimentByNetworkRepository = sentimentByNetworkRepository;
        this.findCompanyUseCase = findCompanyUseCase;
    }
    async execute(sentiment) {
        try {
            const company = await this.findCompanyUseCase.execute(sentiment.companyId);
            let currentSentiment = await this.sentimentByNetworkRepository.findByCompanyAndNetwork(sentiment.companyId, sentiment.network);
            if (!currentSentiment) {
                currentSentiment = this.createSentimentByNetwork(sentiment);
            }
            currentSentiment[sentiment.sentiment] += 1;
            currentSentiment.confidence = this.calculateConfidence(currentSentiment.confidence, currentSentiment.total, sentiment.confidence);
            currentSentiment.total += 1;
            const updatedSentiment = await this.sentimentByNetworkRepository.update(currentSentiment.id, sentiment);
            return new sentiment_by_network_response_dto_1.SentimentByNetworkResponseDto({ ...updatedSentiment });
        }
        catch (error) {
            throw new custom_exception_1.CustomException("Bad Request", "Error updating sentiment", 400);
        }
    }
    calculateConfidence(currentConfidence, previousCount, newConfidence) {
        const newAverageConfidence = (currentConfidence * previousCount + newConfidence) / (previousCount + 1);
        return parseFloat(newAverageConfidence.toFixed(3));
    }
    async createSentimentByNetwork(sentiment) {
        const sentimentByNetwork = {
            companyId: sentiment.companyId,
            network: sentiment.network,
            total: 0,
            confidence: 0,
            positive: 0,
            negative: 0,
            neutral: 0,
        };
        return await this.sentimentByNetworkRepository.create(sentimentByNetwork);
    }
};
exports.UpdateNetworkSentimentUseCase = UpdateNetworkSentimentUseCase;
exports.UpdateNetworkSentimentUseCase = UpdateNetworkSentimentUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SentimentByNetworkRepositoryInterface")),
    __metadata("design:paramtypes", [Object, find_company_use_case_1.FindCompanyUseCase])
], UpdateNetworkSentimentUseCase);
//# sourceMappingURL=update-network-sentiment.use-case.js.map
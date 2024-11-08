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
exports.UpdatePostSentimentUseCase = void 0;
const common_1 = require("@nestjs/common");
const find_post_use_case_1 = require("../../post/use-cases/find-post.use-case");
const custom_exception_1 = require("../../exceptions/custom.exception");
const setiment_response_dto_1 = require("../dto/sentiment-by-post/setiment-response.dto");
let UpdatePostSentimentUseCase = class UpdatePostSentimentUseCase {
    constructor(sentimentByPostRepository, findPostUseCase) {
        this.sentimentByPostRepository = sentimentByPostRepository;
        this.findPostUseCase = findPostUseCase;
    }
    async execute(sentiment) {
        try {
            const postId = sentiment.postId;
            const post = await this.findPostUseCase.execute(postId);
            let sentimentExists = await this.sentimentByPostRepository.findOneByNetwork(post.network);
            if (!sentimentExists) {
                sentimentExists = await this.createSentimentByPost(postId);
            }
            sentimentExists[sentiment.sentiment] += 1;
            sentimentExists.confidence = this.calculateConfidence(sentimentExists.confidence, sentimentExists.total, sentiment.confidence);
            sentimentExists.total += 1;
            const updatedSentiment = await this.sentimentByPostRepository.update(postId, sentiment);
            return new setiment_response_dto_1.SentimentResponseDto({ ...updatedSentiment });
        }
        catch (error) {
            throw new custom_exception_1.CustomException("Bad Request", "Error updating sentiment", 400);
        }
    }
    calculateConfidence(currentConfidence, previousCount, newConfidence) {
        const newAverageConfidence = (currentConfidence * previousCount + newConfidence) / (previousCount + 1);
        return parseFloat(newAverageConfidence.toFixed(3));
    }
    async createSentimentByPost(postId) {
        const sentimentByPost = {
            postId,
            total: 0,
            confidence: 0,
            positive: 0,
            negative: 0,
            neutral: 0,
        };
        return await this.sentimentByPostRepository.create(sentimentByPost);
    }
};
exports.UpdatePostSentimentUseCase = UpdatePostSentimentUseCase;
exports.UpdatePostSentimentUseCase = UpdatePostSentimentUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SentimentByPostRepositoryInterface")),
    __metadata("design:paramtypes", [Object, find_post_use_case_1.FindPostUseCase])
], UpdatePostSentimentUseCase);
//# sourceMappingURL=update-post-sentiment.use-case.js.map
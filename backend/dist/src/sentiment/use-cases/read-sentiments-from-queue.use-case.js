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
var ReadSentimentFromQueueUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadSentimentFromQueueUseCase = void 0;
const create_comment_sentiment_use_case_1 = require("./create-comment-sentiment.use-case");
const update_post_sentiment_use_case_1 = require("./update-post-sentiment.use-case");
const setiment_request_dto_1 = require("../dto/sentiment-by-post/setiment-request.dto");
const common_1 = require("@nestjs/common");
let ReadSentimentFromQueueUseCase = ReadSentimentFromQueueUseCase_1 = class ReadSentimentFromQueueUseCase {
    constructor(createSentimentUseCase, updatePostSentimentUseCase, rabbitmqService) {
        this.createSentimentUseCase = createSentimentUseCase;
        this.updatePostSentimentUseCase = updatePostSentimentUseCase;
        this.rabbitmqService = rabbitmqService;
        this.logger = new common_1.Logger(ReadSentimentFromQueueUseCase_1.name);
    }
    async onModuleInit() {
        this.logger.log("Initializing ReadSentimentFromQueueUseCase...");
        await this.rabbitmqService.onModuleInit();
        await this.execute();
    }
    async execute() {
        this.logger.log("Subscribing to comment_sentiment topic...");
        await this.rabbitmqService.subscribe("comment_sentiment", async (message) => {
            this.logger.log("Message received:", message);
            const createdSentiment = await this.createSentimentUseCase.execute(message);
            const sentimentRequestDto = new setiment_request_dto_1.SentimentRequestDto({
                ...createdSentiment,
            });
            await this.updatePostSentimentUseCase.execute(sentimentRequestDto);
            return createdSentiment;
        });
    }
};
exports.ReadSentimentFromQueueUseCase = ReadSentimentFromQueueUseCase;
exports.ReadSentimentFromQueueUseCase = ReadSentimentFromQueueUseCase = ReadSentimentFromQueueUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)("MessageQueue")),
    __metadata("design:paramtypes", [create_comment_sentiment_use_case_1.CreateCommentSentimenUseCase,
        update_post_sentiment_use_case_1.UpdatePostSentimentUseCase, Object])
], ReadSentimentFromQueueUseCase);
//# sourceMappingURL=read-sentiments-from-queue.use-case.js.map
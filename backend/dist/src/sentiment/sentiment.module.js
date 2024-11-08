"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentimentModule = void 0;
const common_1 = require("@nestjs/common");
const sentiment_controller_1 = require("./sentiment.controller");
const sentiment_respository_impl_1 = require("./repositories/sentiment/sentiment.respository.impl");
const create_comment_sentiment_use_case_1 = require("./use-cases/create-comment-sentiment.use-case");
const read_sentiments_from_queue_use_case_1 = require("./use-cases/read-sentiments-from-queue.use-case");
const update_post_sentiment_use_case_1 = require("./use-cases/update-post-sentiment.use-case");
const update_network_sentiment_use_case_1 = require("./use-cases/update-network-sentiment.use-case");
const sentiment_by_post_repository_impl_1 = require("./repositories/sentiment-by-post/sentiment-by-post.repository.impl");
const sentimen_by_network_repository_impl_1 = require("./repositories/sentiment-by-network/sentimen-by-network.repository.impl");
const rabbit_mq_service_1 = require("../rabbit-mq/rabbit-mq.service");
const post_module_1 = require("../post/post.module");
const company_module_1 = require("../company/company.module");
const prisma_service_1 = require("../prisma.service");
let SentimentModule = class SentimentModule {
};
exports.SentimentModule = SentimentModule;
exports.SentimentModule = SentimentModule = __decorate([
    (0, common_1.Module)({
        imports: [post_module_1.PostModule, company_module_1.CompanyModule],
        controllers: [sentiment_controller_1.SentimentController],
        providers: [
            create_comment_sentiment_use_case_1.CreateCommentSentimenUseCase,
            read_sentiments_from_queue_use_case_1.ReadSentimentFromQueueUseCase,
            update_post_sentiment_use_case_1.UpdatePostSentimentUseCase,
            update_network_sentiment_use_case_1.UpdateNetworkSentimentUseCase,
            prisma_service_1.PrismaService,
            {
                provide: "MessageQueue",
                useClass: rabbit_mq_service_1.RabbitMQService,
            },
            {
                provide: "SentimentRepositoryInterface",
                useClass: sentiment_respository_impl_1.SentimentRepositoryImpl,
            },
            {
                provide: "SentimentByPostRepositoryInterface",
                useClass: sentiment_by_post_repository_impl_1.SentimentByPostRepositoryImpl,
            },
            {
                provide: "SentimentByNetworkRepositoryInterface",
                useClass: sentimen_by_network_repository_impl_1.SentimentByNetworkRepositoryImpl,
            },
        ],
    })
], SentimentModule);
//# sourceMappingURL=sentiment.module.js.map
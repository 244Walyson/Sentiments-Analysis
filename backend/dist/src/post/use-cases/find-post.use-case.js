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
var FindPostUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPostUseCase = void 0;
const common_1 = require("@nestjs/common");
const response_post_dto_1 = require("../dto/response-post.dto");
let FindPostUseCase = FindPostUseCase_1 = class FindPostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
        this.logger = new common_1.Logger(FindPostUseCase_1.name);
    }
    async execute(id, traceId) {
        try {
            const post = await this.postRepository.findOne(id);
            if (!post) {
                this.logger.error(`[${traceId}] Post not found`);
                throw new common_1.NotFoundException(`[${traceId}] Post not found`);
            }
            return new response_post_dto_1.ResponsePostDto({ ...post });
        }
        catch (error) {
            this.logger.error(`[${traceId}] Error finding post: `, error);
            throw new common_1.NotFoundException(`[${traceId}] Error finding post`);
        }
    }
};
exports.FindPostUseCase = FindPostUseCase;
exports.FindPostUseCase = FindPostUseCase = FindPostUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PostRepositoryInterface")),
    __metadata("design:paramtypes", [Object])
], FindPostUseCase);
//# sourceMappingURL=find-post.use-case.js.map
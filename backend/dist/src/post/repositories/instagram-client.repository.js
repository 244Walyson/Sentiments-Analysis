"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramRepository = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const create_post_dto_1 = require("../dto/create-post.dto");
const network_enum_1 = require("../entities/enums/network.enum");
const create_comment_dto_1 = require("../dto/create-comment.dto");
let InstagramRepository = class InstagramRepository {
    constructor() {
        this.BASE_URL = "https://graph.instagram.com";
        this.mapInstagramResponseToDto = (post, companyId) => {
            return new create_post_dto_1.CreatePostDto({
                postId: post.id,
                companyId,
                network: network_enum_1.NetworkEnum.INSTAGRAM,
                postUrl: post.permalink,
                content: post.caption || "",
                createdAt: new Date(post.timestamp),
                mediaType: post.media_type,
                mediaUrls: post.media_type === "CAROUSEL_ALBUM"
                    ? post.children?.data?.map((child) => child.media_url) || []
                    : [post.media_url],
            });
        };
        this.mapInstagramCommentResponseToDto = (postId, comment) => {
            return new create_comment_dto_1.CreateCommentDto({
                commentId: comment.id,
                postId: postId,
                content: comment.text,
                author: comment.username,
                timestamp: new Date(comment.timestamp),
            });
        };
    }
    async getUserPosts(companyId, accessToken) {
        const url = `${this.BASE_URL}/${companyId}/media?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url,username,children&access_token=${accessToken}`;
        try {
            const response = await axios_1.default.get(url);
            const data = response.data.data.map((post) => this.mapInstagramResponseToDto(post, companyId));
            return data;
        }
        catch (error) {
            throw new Error(`${error.response?.data?.error?.message || error.message}`);
        }
    }
    async getCommentsByPostId(postId, accessToken) {
        const url = `${this.BASE_URL}/${postId}/comments?fields=id,text,timestamp,username&access_token=${accessToken}`;
        try {
            const response = await axios_1.default.get(url);
            const data = response.data.data.map((comment) => this.mapInstagramCommentResponseToDto(postId, comment));
            return data;
        }
        catch (error) {
            throw new Error(`${error.response?.data?.error?.message || error.message}`);
        }
    }
};
exports.InstagramRepository = InstagramRepository;
exports.InstagramRepository = InstagramRepository = __decorate([
    (0, common_1.Injectable)()
], InstagramRepository);
//# sourceMappingURL=instagram-client.repository.js.map
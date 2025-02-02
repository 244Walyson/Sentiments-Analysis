import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CreatePostDto } from "../dto/create-post.dto";
import { NetworkEnum } from "../entities/enums/network.enum";
import { CreateCommentDto } from "../dto/create-comment.dto";

@Injectable()
export class InstagramRepository {
  private readonly BASE_URL = "https://graph.instagram.com";

  async getUserPosts(
    companyId: string,
    accessToken: string
  ): Promise<CreatePostDto[]> {
    const url = `${this.BASE_URL}/${companyId}/media?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url,username,children&access_token=${accessToken}`;

    try {
      const response = await axios.get(url);
      const data = response.data.data.map((post: any) =>
        this.mapInstagramResponseToDto(post, companyId)
      );
      return data;
    } catch (error) {
      throw new Error(
        `${error.response?.data?.error?.message || error.message}`
      );
    }
  }

  private readonly mapInstagramResponseToDto = (
    post: any,
    companyId: string
  ): CreatePostDto => {
    return new CreatePostDto({
      postId: post.id,
      companyId,
      network: NetworkEnum.INSTAGRAM,
      postUrl: post.permalink,
      content: post.caption || "",
      createdAt: new Date(post.timestamp),
      mediaType: post.media_type,
      mediaUrls:
        post.media_type === "CAROUSEL_ALBUM"
          ? post.children?.data?.map((child: any) => child.media_url) || []
          : [post.media_url],
    });
  };

  async getCommentsByPostId(postId: string, accessToken: string) {
    const url = `${this.BASE_URL}/${postId}/comments?fields=id,text,timestamp,username&access_token=${accessToken}`;

    try {
      const response = await axios.get(url);
      const data = response.data.data.map((comment: any) => this.mapInstagramCommentResponseToDto(postId, comment));
      return data;
    } catch (error) {
      throw new Error(
        `${error.response?.data?.error?.message || error.message}`
      );
    }
  }

  private readonly mapInstagramCommentResponseToDto = (postId: string, comment: any) => {
    return new CreateCommentDto({
        commentId: comment.id,
        postId: postId,
        content: comment.text,
        author: comment.username,
        timestamp: new Date(comment.timestamp),
    })
  }
}

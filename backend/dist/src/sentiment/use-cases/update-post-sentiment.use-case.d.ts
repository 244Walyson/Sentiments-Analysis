import { SentimentRequestDto } from "../dto/sentiment-by-post/setiment-request.dto";
import { FindPostUseCase } from "src/post/use-cases/find-post.use-case";
import { SentimentByPostRepositoryInterface } from "../repositories/sentiment-by-post/sentiment-by-post.repository.interface";
import { SentimentResponseDto } from "../dto/sentiment-by-post/setiment-response.dto";
export declare class UpdatePostSentimentUseCase {
    private readonly sentimentByPostRepository;
    private readonly findPostUseCase;
    constructor(sentimentByPostRepository: SentimentByPostRepositoryInterface, findPostUseCase: FindPostUseCase);
    execute(sentiment: SentimentRequestDto): Promise<SentimentResponseDto>;
    private calculateConfidence;
    private createSentimentByPost;
}

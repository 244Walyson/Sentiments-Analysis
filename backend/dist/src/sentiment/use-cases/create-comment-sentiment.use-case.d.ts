import { SentimentRepositoryInterface } from "../repositories/sentiment/sentiment.repository.interface";
import { CreateSentimentDto } from "../dto/sentiment/create-sentiment.dto";
export declare class CreateCommentSentimenUseCase {
    private readonly sentimentRepository;
    constructor(sentimentRepository: SentimentRepositoryInterface);
    execute(sentiment: CreateSentimentDto): Promise<any>;
}

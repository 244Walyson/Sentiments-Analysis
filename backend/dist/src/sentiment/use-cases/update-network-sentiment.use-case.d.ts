import { FindCompanyUseCase } from "src/company/use-cases/find-company.use-case";
import { SentimentByNetworkRepositoryInterface } from "../repositories/sentiment-by-network/sentimen-by-network.repository.interface";
import { SentimentByNetworkRequestDto } from "../dto/sentiment-by-network/sentiment-by-network-request.dto";
import { SentimentByNetworkResponseDto } from "../dto/sentiment-by-network/sentiment-by-network-response.dto";
export declare class UpdateNetworkSentimentUseCase {
    private readonly sentimentByNetworkRepository;
    private readonly findCompanyUseCase;
    constructor(sentimentByNetworkRepository: SentimentByNetworkRepositoryInterface, findCompanyUseCase: FindCompanyUseCase);
    execute(sentiment: SentimentByNetworkRequestDto): Promise<SentimentByNetworkResponseDto>;
    private calculateConfidence;
    private createSentimentByNetwork;
}

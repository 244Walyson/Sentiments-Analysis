import { SentimentService } from './sentiment.service';
import { CreateSentimentDto } from './dto/create-sentiment.dto';
import { UpdateSentimentDto } from './dto/update-sentiment.dto';
export declare class SentimentController {
    private readonly sentimentService;
    constructor(sentimentService: SentimentService);
    create(createSentimentDto: CreateSentimentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSentimentDto: UpdateSentimentDto): string;
    remove(id: string): string;
}

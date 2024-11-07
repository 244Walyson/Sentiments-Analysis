import { CreateSentimentDto } from './dto/create-sentiment.dto';
import { UpdateSentimentDto } from './dto/update-sentiment.dto';
export declare class SentimentService {
    create(createSentimentDto: CreateSentimentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSentimentDto: UpdateSentimentDto): string;
    remove(id: number): string;
}

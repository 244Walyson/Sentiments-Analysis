import { CreateEngagementDto } from './dto/create-engagement.dto';
import { UpdateEngagementDto } from './dto/update-engagement.dto';
export declare class EngagementService {
    create(createEngagementDto: CreateEngagementDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEngagementDto: UpdateEngagementDto): string;
    remove(id: number): string;
}

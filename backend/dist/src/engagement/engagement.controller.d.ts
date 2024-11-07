import { EngagementService } from './engagement.service';
import { CreateEngagementDto } from './dto/create-engagement.dto';
import { UpdateEngagementDto } from './dto/update-engagement.dto';
export declare class EngagementController {
    private readonly engagementService;
    constructor(engagementService: EngagementService);
    create(createEngagementDto: CreateEngagementDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEngagementDto: UpdateEngagementDto): string;
    remove(id: string): string;
}

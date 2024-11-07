import { AudienceService } from './audience.service';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';
export declare class AudienceController {
    private readonly audienceService;
    constructor(audienceService: AudienceService);
    create(createAudienceDto: CreateAudienceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAudienceDto: UpdateAudienceDto): string;
    remove(id: string): string;
}

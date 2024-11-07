import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';
export declare class AudienceService {
    create(createAudienceDto: CreateAudienceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAudienceDto: UpdateAudienceDto): string;
    remove(id: number): string;
}

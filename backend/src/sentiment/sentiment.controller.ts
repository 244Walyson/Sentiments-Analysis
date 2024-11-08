import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SentimentService } from "./sentiment.service";
import { CreateSentimentDto } from "./dto/sentiment/create-sentiment.dto";
import { UpdateSentimentDto } from "./dto/update-sentiment.dto";

@Controller("sentiment")
export class SentimentController {
  constructor(private readonly sentimentService: SentimentService) {}

  @Post()
  create(@Body() createSentimentDto: CreateSentimentDto) {
    return this.sentimentService.create(createSentimentDto);
  }

  @Get()
  findAll() {
    return this.sentimentService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sentimentService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSentimentDto: UpdateSentimentDto
  ) {
    return this.sentimentService.update(+id, updateSentimentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.sentimentService.remove(+id);
  }
}

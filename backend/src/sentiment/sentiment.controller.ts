import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreateSentimentDto } from "./dto/sentiment/create-sentiment.dto";

@Controller("sentiment")
export class SentimentController {
  constructor() {}
}

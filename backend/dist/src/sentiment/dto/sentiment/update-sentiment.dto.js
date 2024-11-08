"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSentimentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sentiment_dto_1 = require("./create-sentiment.dto");
class UpdateSentimentDto extends (0, mapped_types_1.PartialType)(create_sentiment_dto_1.CreateSentimentDto) {
}
exports.UpdateSentimentDto = UpdateSentimentDto;
//# sourceMappingURL=update-sentiment.dto.js.map
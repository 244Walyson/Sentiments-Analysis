"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAudienceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_audience_dto_1 = require("./create-audience.dto");
class UpdateAudienceDto extends (0, mapped_types_1.PartialType)(create_audience_dto_1.CreateAudienceDto) {
}
exports.UpdateAudienceDto = UpdateAudienceDto;
//# sourceMappingURL=update-audience.dto.js.map
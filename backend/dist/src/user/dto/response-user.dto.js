"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseUserDto = void 0;
class ResponseUserDto {
    constructor(props) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        Object.assign(this, props);
    }
}
exports.ResponseUserDto = ResponseUserDto;
//# sourceMappingURL=response-user.dto.js.map
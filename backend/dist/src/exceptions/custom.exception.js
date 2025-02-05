"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomException = void 0;
const common_1 = require("@nestjs/common");
class CustomException extends common_1.HttpException {
    constructor(error, message, status = common_1.HttpStatus.BAD_REQUEST) {
        super({
            error,
            message,
        }, status);
    }
}
exports.CustomException = CustomException;
//# sourceMappingURL=custom.exception.js.map
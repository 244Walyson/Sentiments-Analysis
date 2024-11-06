"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = props.id ?? crypto.randomUUID();
        Object.entries(props).forEach(([key, value]) => {
            this[key] = value ?? null;
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const express_1 = require("./config/express");
class ExpressStart extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const config = this.prepareConfig('express', express_1.default);
                this.app.expressServer = this.app.express.listen(config.port);
                this.log.info(`Server started at port ${config.port}`);
            }
            catch (err) {
                this.log.error(err);
                throw err;
            }
        });
    }
}
exports.default = ExpressStart;
//# sourceMappingURL=start.js.map
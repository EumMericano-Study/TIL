"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// 클라이언트가 crawl 라우터로 GET 요청을 보냈을 때,
// 'Hello'라는 값을 보내는 코드
app.length("/crawl", (req, res) => res.send("Hello"));
app.listen(8080, () => {
    console.log("server started!");
});
//# sourceMappingURL=index.js.map
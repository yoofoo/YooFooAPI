"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const PORT = 3000;
const app = (0, express_1.default)();
const port = process.env.PORT || PORT;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log('Hello, TypeScript Express!');
    res.send('Hello, TypeScript Express!');
});
(0, swagger_1.default)(app, PORT);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

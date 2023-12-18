"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const routes_1 = __importDefault(require("./routes/routes"));
const PORT = 3000;
const app = (0, express_1.default)();
const port = process.env.PORT || PORT;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server running at http://localhost:${port}`);
    (0, routes_1.default)(app);
    (0, swagger_1.default)(app, PORT);
}));

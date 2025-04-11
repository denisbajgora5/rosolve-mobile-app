"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const app = (0, express_1.default)();
const PORT = process.env.EXPRESS_SERVER_PORT;
app.use((0, cors_1.default)({ origin: 'http://localhost:19006' })); // only allow Expo Web
app.get('/api/value', (req, res) => {
    res.json({ value: 'Express Server Status: WORKING!' });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

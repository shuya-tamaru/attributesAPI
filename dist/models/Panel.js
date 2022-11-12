"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PanelSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
    },
    delivery: {
        type: String,
        required: true,
    },
});
const Panel = mongoose_1.default.model("Panel", PanelSchema);
exports.default = Panel;

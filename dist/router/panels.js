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
const express_1 = require("express");
const Panel_1 = __importDefault(require("../models/Panel"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllPanels = yield Panel_1.default.find();
        res.status(200).json(getAllPanels);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createPanel = yield Panel_1.default.create(req.body);
        res.status(200).json(createPanel);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getSinglePanel = yield Panel_1.default.findOne({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!getSinglePanel) {
            return res.status(404).json("Panel is not found");
        }
        res.status(200).json(getSinglePanel);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateSinglePanel = yield Panel_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!updateSinglePanel) {
            return res.status(404).json("Panel is not found");
        }
        res.status(200).json(updateSinglePanel);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteSinglePanel = yield Panel_1.default.findOneAndDelete({
            _id: req.params.id,
        });
        if (!deleteSinglePanel) {
            return res.status(404).json("Panel is not found");
        }
        res.status(200).json(deleteSinglePanel);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
exports.default = router;

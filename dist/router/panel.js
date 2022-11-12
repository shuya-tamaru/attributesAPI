"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("get");
});
router.post("/", (req, res) => {
    res.send("post");
});
router.get("/:id", (req, res) => {
    res.send("singleGet");
});
router.put("/:id", (req, res) => {
    res.send("put");
});
router.delete("/:id", (req, res) => {
    res.send("delete");
});
exports.default = router;

import { Router } from "express";
import Panel from "../models/Panel";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const getAllPanels = await Panel.find();
    res.status(200).json(getAllPanels);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const createPanel = await Panel.create(req.body);
    res.status(200).json(createPanel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getSinglePanel = await Panel.findOne(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!getSinglePanel) {
      return res.status(404).json("Panel is not found");
    }
    res.status(200).json(getSinglePanel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateSinglePanel = await Panel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!updateSinglePanel) {
      return res.status(404).json("Panel is not found");
    }
    res.status(200).json(updateSinglePanel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteSinglePanel = await Panel.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deleteSinglePanel) {
      return res.status(404).json("Panel is not found");
    }
    res.status(200).json(deleteSinglePanel);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

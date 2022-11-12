import mongoose from "mongoose";
import IPanelDocument from "../interfaces/IPanelDocoment";

const PanelSchema = new mongoose.Schema<IPanelDocument>({
  _id: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
});

const Panel = mongoose.model<IPanelDocument>("Panel", PanelSchema);

export default Panel;

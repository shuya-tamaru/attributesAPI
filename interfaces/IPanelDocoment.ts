import mongoose from "mongoose";

export default interface IPanelDocument extends mongoose.Document {
  _id: String;
  delivery: String;
}

import mongoose from "mongoose";

export const connectDB = (url: string) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("connecting to DB");
    })
    .catch((err) => console.log(err));
};

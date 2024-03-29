import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(
      // process.env.DB_URL,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    );
  } catch (err) {
    console.log("DB Not Connected")
  }
})()


const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
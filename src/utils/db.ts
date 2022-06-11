import mongoose from "mongoose";
import logger from "./logger";

const db_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myDatabase';

export async function connectToDb() {
  try {
    await mongoose.connect(db_uri);
  } catch (e) {
    logger.error(e, "error connecting to database");
    process.exit(1);
  }
}

export async function disconnectFromDB() {
  await mongoose.connection.close();

  logger.info("Disconnect from db");

  return;
}
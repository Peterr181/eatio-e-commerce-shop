const { default: mongoose } = require("mongoose");

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(`${process.env.MONGO_URL}`);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

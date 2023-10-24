import mongoose from "mongoose";

export class Database {
  constructor() {
    this.url =
      "mongodb+srv://evoting:Smartboy!__284@cluster0.nrpj9dc.mongodb.net/airtime?";
  }
  async connect() {
    try {
      mongoose.connect(this.url, {
        autoIndex: true,
        useNewUrlParser: true,
        autoCreate: true,
        writeConcern: { w: "majority" },
        // autoReconnect: false,
      });
      console.log("Connection to MongoDB cluster was successfully");
    } catch (error) {
      console.log("Error connecting to MongoDB");
      console.error(error);
    }
  }
}

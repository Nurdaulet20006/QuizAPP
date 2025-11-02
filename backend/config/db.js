import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://240118003_db_user:<db_password>@cluster0.tipcuf3.mongodb.net/")
    .then(() => { console.log("DB connected") })
    .catch((err) => { console.log("DB connection error:", err) });
};




// STEPS 

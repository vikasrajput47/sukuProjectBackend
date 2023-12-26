import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "suku",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((error) => {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit the application on connection error
    });
};

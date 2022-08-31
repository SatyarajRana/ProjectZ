import  express  from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();

mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
     
      // authMechanism: "SCRAM-SHA-1"
    },
    (err) => {
      if (err != null) {
        console.log("What an idiot you are, can't even connect to the DB :D", err);
      } else {
        console.log("Successfully connected to the DB");
      }
    }
  );

app.listen(process.env.PORT, ()=>{
    console.log("Server up and running...");
})
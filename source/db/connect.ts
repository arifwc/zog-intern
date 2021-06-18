import mongoose from "mongoose";
import config from "../config/config";

function connect() {
    const dbUri = config.dbUri as string;

    return mongoose
    .connect(dbUri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() =>{
        console.log("Database connected");
    })
    .catch((error) =>{
        console.log(`DB Error: ${error}`);
    });
}

export default connect;
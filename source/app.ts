import express from "express";
import config from "./config/config";
import connect from "./db/connect"

const port = config.port as number;
const host = config.host as string;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port,host, ()=> {
    console.log(`Server up at http://${host}:${port}`);
    connect();
})
import { Express, Response, Request } from "express";
import {NewsController} from "./controller/news.controller";
import {TopicController} from "./controller/topic.controller";

let req: Request;
let res: Response;
let news: NewsController = new NewsController();
let topic: TopicController = new TopicController();

export default function (app: Express){
    app.get("/cek", (req, res) => res.send("OK"));
    
    app.get("/news", news.allNews);
    app.post("/news/create",news.createNews);
    app.put("/news/update/:id", news.updateNews);
    app.delete("/news/delete/:id", news.deleteNews);
    app.get("/news/:id", news.findNewsbyId);

    app.get("/news/filter", news.filterNews);
    
    app.get("/topics", topic.allTopic);
    app.post("/topics/create", topic.createTopic);
    app.put("/topics/update/:id", topic.updateTopic);
    app.delete("/topics/delete/:id", topic.deleteTopic);
    app.get("/topics/:id", topic.findTopicbyId);
}
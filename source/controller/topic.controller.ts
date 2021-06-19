import Topic from "../model/topic.model"
import { Request, Response } from "express";

export class TopicController {
    
    public createTopic(req: Request, res: Response){
        let newTopic = new Topic(req.body);
        newTopic.save( (err,topic) => {
            if(err) {
                res.send(err);
            }
            res.json(topic);
        });
    }

    public allTopic(req: Request, res: Response){
        Topic.find({}, (err,topic) =>{
            if (err) {
                res.send(err);
            }
            res.json(topic);
        });
    }

    public updateTopic(req: Request, res: Response){
        Topic.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, topic) => {
            if(err){
                res.send(err);
            }
            res.json(topic);
        });
    }

    public deleteTopic(req: Request, res: Response){
        Topic.remove({ _id: req.params.id }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({message:"Deleted"});
        });
    }

    public findTopicbyId(req: Request, res: Response){
        Topic.findById(req.params.id, (err:any, topic:any) => {
            if(err){
                res.send(err);
            }
            res.json(topic);
        });
    }
    
}
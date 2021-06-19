import News from "../model/news.model";
import Topic from "model/topic.model";
import { Request, Response } from "express";

export class NewsController {
    
    public createNews(req: Request, res: Response){
        let newNews = new News(req.body);
        newNews.save( (err,news) => {
            if(err) {
                res.send(err);
            }
            res.json(news);
        });

        
    }

    public allNews(req: Request, res: Response){
        News.find({},(err,news) =>{
            if (err) {
                res.send(err);
            }
            res.json(news);
        });
    }

    public updateNews(req: Request, res: Response){
        News.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, news) => {
            if(err){
                res.send(err);
            }
            res.json(news);
        });
    }

    public deleteNews(req: Request, res: Response){
        News.remove({ _id: req.params.id }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({message:"Deleted"});
        });
    }

    public findNewsbyId(req: Request, res: Response){
        News.findById(req.params.id, (err:any, news:any) => {
            if(err){
                res.send(err);
            }
            res.json(news);
        });
    }

    public filterNews(req: Request, res: Response){
        
        if(req.query.status){
            News.find( {status : req.query.status as any}, (err,news)=>{
                if (err){
                    res.send(err);
                }
                res.json(news);
            })
        }
        else if(req.query.topics){
            News.find( {topics: {$in: req.query.topics as any}}, (err,news)=>{
                if (err){
                    res.send(err);
                }
                res.json(news);
            })
        }
        else{
            res.json({message:"Please use topics or status parameter with ID"});
        }
    }

}
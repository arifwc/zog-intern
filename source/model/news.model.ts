import mongoose, {Schema,Document} from "mongoose";
import {TopicDocument} from "./topic.model";

export interface NewsDocument extends Document {

    status: string;
    title: string;
    content: string;
    topics: [ TopicDocument["_id"] ];
    createdAt: Date;
    updatedAt: Date;
}

const NewsSchema = new Schema({
    status: { type: String, default: true },
    title: { type: String, default: true},
    content: { type: String, default: true },
    topics: [{ type: Schema.Types.ObjectId, ref:"topics"}]
}, {timestamps:true});

const News = mongoose.model<NewsDocument>("News", NewsSchema);

export default News;
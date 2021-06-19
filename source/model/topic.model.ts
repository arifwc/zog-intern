import mongoose, {Schema,Document} from "mongoose";
import { NewsDocument } from "./news.model";

export interface TopicDocument extends Document {
    topic: string;
    news: [ NewsDocument["_id"] ];
}

const TopicSchema = new Schema({
    topic: { type: String,default: true },
    news: [{ type: Schema.Types.ObjectId, ref:"news", default:null}] 
}, {timestamps:false});

const Topic = mongoose.model<TopicDocument>("Topic", TopicSchema);

export default Topic;
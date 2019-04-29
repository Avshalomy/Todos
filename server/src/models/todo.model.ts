import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  name: string;
}

const TodoSchema: Schema = new Schema({
  name: { type: String, required: true }
});

export default mongoose.model<ITodo>('Todo', TodoSchema);

import { Schema } from 'mongoose'

const CommentSchema = new Schema({
  comment: String,
  authorId: Number
}, { timestamps: true })

export default CommentSchema

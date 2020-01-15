import { Schema } from 'mongoose'

const CommentSchema = new Schema({
  comment: String,
  // User Profile
}, { timestamps: true })

export default CommentSchema

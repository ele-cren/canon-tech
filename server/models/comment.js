import { Schema } from 'mongoose'

const CommentSchema = new Schema({
  comment: String,
  username: String,
  userPicture: String
}, { timestamps: true })

export default CommentSchema

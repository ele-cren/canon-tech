import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: String,
  authorId: Number
}, { timestamps: true })

export default mongoose.model('Comment', CommentSchema)

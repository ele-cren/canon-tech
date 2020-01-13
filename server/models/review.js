import mongoose, { Schema } from 'mongoose'

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  review: String,
  authorId: Number,
  rate: Number,
  upvotes: Number,
  downvotes: Number
}, { timestamps: true })

export default mongoose.model('Review', ReviewSchema)

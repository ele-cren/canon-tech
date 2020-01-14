import mongoose, { Schema } from 'mongoose'

const ReviewSchema = new Schema({
  review: String,
  authorId: Number,
  rate: Number,
  upvotes: Number,
  downvotes: Number
}, { timestamps: true })

export const model = mongoose.model('Review', ReviewSchema)

export default ReviewSchema
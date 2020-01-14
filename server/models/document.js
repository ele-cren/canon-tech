import mongoose, { Schema } from 'mongoose'
import Review from './review'
import Comment from './comment'

const DocumentSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  posterUrl: String,
  author: {
    type: String
  },
  year: {
    type: Number
  },
  rate: Number,
  reviews: [Review],
  comments: [Comment],
  genre: String,
  categories: [String]
})

export default mongoose.model('Document', DocumentSchema)

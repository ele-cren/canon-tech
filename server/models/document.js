import mongoose, { Schema } from 'mongoose'

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
  ratings: [{
    rate: Number,
    rater: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  reviews: [{
    review: String,
    rate: Number,
    upvotes: Number,
    downvotes: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    postedAt: Date
  }],
  comments: {
    comment: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    postedAt: Date
  },
  genre: String,
  categories: [String]
})

export default mongoose.model('Document', DocumentSchema)

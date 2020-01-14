import express from 'express'
import fs from 'fs'
import path from 'path'
import Document from '../../models/document'
import { model as reviewModel } from '../../models/review'

const router = express.Router()

router.post('/posts', (req, res) => {
  const document = JSON.parse(req.body.document)
  const fileName = Date.now() + '.png'
  const imageUrl = req.protocol + '://' + req.get('host') + '/images/' + fileName
  const newReview = new reviewModel({
    review: document.review,
    authorId: req.user.id,
    rate: document.rate,
    upvotes: 0,
    downvotes: 0
  })
  const newDoc = new Document({
    title: document.title,
    author: document.author,
    year: document.year,
    rate: document.rate,
    posterUrl: imageUrl,
    genre: document.genre,
    categories: document.categories,
    reviews: [newReview],
    comments: []
  })
  return newDoc.save((err, doc) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.json({ errors: { title: 'DocumentExists' } })
      }
      return res.json(err)
    }
    uploadPicture(document.posterUrl, fileName)
    return res.json(doc)
  })
})

const uploadPicture = (picture, fileName) => {
  const rootPath = path.dirname(require.main.filename)
  const mypath = rootPath + '/images/' + fileName
  const base64Data = picture.replace(/^data:([A-Za-z-+/]+);base64,/, '')
  fs.writeFileSync(mypath, base64Data, { encoding: 'base64' })
  return fileName
}

export default router

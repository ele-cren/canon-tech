import express from 'express'
import fs from 'fs'
import path from 'path'
import Document from '../../models/document'
import User from '../../models/user'

const router = express.Router()

router.post('/posts', (req, res) => {
  const document = JSON.parse(req.body.document)
  const fileName = Date.now() + '.png'
  const imageUrl = req.protocol + '://' + req.get('host') + '/images/' + fileName

  return User.findById(req.user.id, (err, user) => {
    if (err) {
      return res.json(err)
    }
    const newReview = document.review ? {
      review: document.review,
      rate: document.rate,
      user: req.user._id,
      upvotes: 0,
      downvotes: 0,
      postedAt: new Date(Date.now())
    } : null
    const newDoc = new Document({
      title: document.title,
      author: document.author,
      year: document.year,
      ratings: [{ rate: document.rate, rater: req.user._id }],
      posterUrl: imageUrl,
      genre: document.genre,
      categories: document.categories,
      reviews: newReview ? [newReview] : [],
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
      return res.json({ document: doc })
    })
  })
})

const uploadPicture = (picture, fileName) => {
  const rootPath = path.dirname(require.main.filename)
  const mypath = rootPath + '/images/' + fileName
  const base64Data = picture.replace(/^data:([A-Za-z-+/]+);base64,/, '')
  fs.writeFileSync(mypath, base64Data, { encoding: 'base64' })
  return fileName
}

router.get('/post/:id', (req, res) => {
  const id = req.params.id
  return Document.findById(id).populate({path : 'reviews.user', select: ['username', 'userPicture'], model: 'User'}).exec((err, post) => {
    if (err) {
      return res.json(err)
    }
    return res.json({ document: post })
  })
})

router.get('/posts', (req, res) => {
  return Document.find((err, docs) => {
    if (err) {
      return res.json(err)
    }
    return res.json({ documents: docs })
  })
})

router.patch('/post/:id', (req, res) => {
  const { id } = req.params
  if (req.user.id) {
    const docInfos = JSON.parse(req.body.docInfos)
    return Document.findByIdAndUpdate({ _id: id }, { $set: docInfos }, (err, doc) => {
      if (err) {
        return res.json(err)
      }
      return res.json({ document: doc })
    })
  }
  return res.json({ error: 'Not authorized' })
})

router.get('/post/reviews/:id', (req, res) => {
  const { id } = req.params
  Document.find({ 'reviews.user': id }, 'reviews.review posterUrl', (err, docs) => {
    if (err) {
      return res.json(err)
    }
    return res.json({ documents: docs })
  })
})

export default router

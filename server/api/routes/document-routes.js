import express from 'express'

const router = express.Router()

router.post('/posts', (req, res) => {
  console.log(req.body.document)
  // UPLOAD PICTURE THEN CREATE DOCUMENT
  return res.json({ toto: 'ok' })
})

export default router

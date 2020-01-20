import express from 'express'
import User from '../../models/user'
import bcrypt from 'bcrypt'

const router = express.Router()

router.patch('/update', (req, res) => {
  if (req.user.id) {
    const userInfos = JSON.parse(req.body.userInfos)
    if (userInfos.password) {
      userInfos.password = bcrypt.hashSync(userInfos.password, bcrypt.genSaltSync(8), null)
    }
    return User.findOneAndUpdate({ _id: req.user.id }, { $set: userInfos }, (err, user) => {
      if (err) {
        return res.json(err)
      }
      return res.json(user)
    })
  }
  return res.json({ errror: 'Not authorized' })
})

export default router

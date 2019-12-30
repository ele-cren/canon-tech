import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true
  },
  username: {
    type: String,
    lowercase: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  password: String
})

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compare(password, this.password)
}

UserSchema.methods.comparePasswords = function comparePasswords(password) {
  bcrypt.compare(password, this.password)
}

export default mongoose.model('User', UserSchema)
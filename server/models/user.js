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

UserSchema.methods.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.comparePasswords = function comparePasswords(password, callback) {
  bcrypt.compare(password, this.password, callback)
}

export default mongoose.model('User', UserSchema)
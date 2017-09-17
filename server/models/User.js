import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import uniqueValidator from 'mongoose-unique-validator'

// to do add uniqueness and email validationsto email field
const schema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, index: true, unique: true },
  passwordHash: { type: String, required: true },
  confirmed: { type: Boolean, default: false}
}, { timestamps: true})

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

schema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
    email: this.email
  }, process.env.JWT_SECRET)
}

schema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    token: this.generateJWT()
  }
}

schema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10)
}

schema.plugin(uniqueValidator, { message: 'This email is already reserved'})

export default mongoose.model('User', schema)
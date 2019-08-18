/* eslint-disable func-names */
/* eslint-disable consistent-return */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, required: true },
}, { timestamps: true })

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})

module.exports = mongoose.model('User', userSchema)

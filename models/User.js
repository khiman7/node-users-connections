const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  registered: { type: Date, required: true },
  age: { type: Number, required: true },
  followed: { type: [Number], default: [] },
  followers: { type: [Number], default: [] }
});

module.exports = model('User', userSchema);

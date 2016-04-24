const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the model
const userSchema = new Schema({
  // this is literally the JS String
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
model.exports = ModelClass;

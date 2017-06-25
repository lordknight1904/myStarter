import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: 'String', required: true },
  token : { type: 'String', required: true },
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);

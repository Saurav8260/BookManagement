import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  price: { type: Number, required: true },
  publishedDate: { type: Date }
}, { timestamps: true });

export default mongoose.model('Book', bookSchema);

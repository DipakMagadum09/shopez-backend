const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  thumbnailImg: { type: String, required: true },
  images: [{ type: String }],
  category: {
    type: String,
    enum: ['mobiles', 'electronics', 'sports-equipment', 'fashion', 'groceries'],
    required: true
  },
  gender: { type: String, enum: ['men', 'women', 'unisex'], default: 'unisex' },
  availableSizes: [{ type: String, enum: ['S', 'M', 'L', 'XL'] }],
  stock: { type: Number, default: 10 },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

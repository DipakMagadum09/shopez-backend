const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String },
  userEmail: { type: String },
  userMobile: { type: String },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  size: { type: String },
  price: { type: Number, required: true },
  paymentMethod: { type: String, default: 'netbanking' },
  address: { type: String },
  pincode: { type: String },
  orderStatus: {
    type: String,
    enum: ['order placed', 'processing', 'shipped', 'in-transit', 'delivered', 'cancelled'],
    default: 'order placed'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

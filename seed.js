const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: 'Iphone 12',
    description: 'Apple Iphone with 8GB ram and 128GB storage. Best in class camera.',
    price: 67999,
    originalPrice: 79999,
    thumbnailImg: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
    images: [],
    category: 'mobiles',
    gender: 'unisex',
    availableSizes: [],
    stock: 15
  },
  {
    name: 'Realme buds',
    description: 'TWS buds with 10.2mm drivers giving deep bass. 30hr battery life.',
    price: 2599,
    originalPrice: 3999,
    thumbnailImg: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    images: [],
    category: 'electronics',
    gender: 'unisex',
    availableSizes: [],
    stock: 30
  },
  {
    name: 'MRF cricket bat',
    description: 'Popular willow wood cricket bat from MRF. Suitable for all format plays.',
    price: 1308,
    originalPrice: 1699,
    thumbnailImg: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=400&fit=crop',
    images: [],
    category: 'sports-equipment',
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L'],
    stock: 20
  },
  {
    name: 'Carrom board',
    description: 'Quality carrom board along with necessary equipment to make your free time more joyful.',
    price: 919,
    originalPrice: 1299,
    thumbnailImg: 'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=400&h=400&fit=crop',
    images: [],
    category: 'sports-equipment',
    gender: 'unisex',
    availableSizes: ['M', 'L'],
    stock: 12
  },
  {
    name: 'Men\'s Casual T-Shirt',
    description: 'Comfortable cotton t-shirt for everyday wear. Available in multiple colors.',
    price: 499,
    originalPrice: 799,
    thumbnailImg: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    images: [],
    category: 'fashion',
    gender: 'men',
    availableSizes: ['S', 'M', 'L', 'XL'],
    stock: 50
  },
  {
    name: 'Women\'s Floral Dress',
    description: 'Beautiful floral print dress perfect for casual outings and events.',
    price: 899,
    originalPrice: 1499,
    thumbnailImg: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop',
    images: [],
    category: 'fashion',
    gender: 'women',
    availableSizes: ['S', 'M', 'L'],
    stock: 25
  },
  {
    name: 'Samsung Galaxy Buds',
    description: 'Premium wireless earbuds with active noise cancellation and 360° audio.',
    price: 8999,
    originalPrice: 12999,
    thumbnailImg: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&h=400&fit=crop',
    images: [],
    category: 'electronics',
    gender: 'unisex',
    availableSizes: [],
    stock: 18
  },
  {
    name: 'Fresh Fruits Basket',
    description: 'Premium handpicked seasonal fruits delivered fresh to your doorstep.',
    price: 349,
    originalPrice: 499,
    thumbnailImg: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop',
    images: [],
    category: 'groceries',
    gender: 'unisex',
    availableSizes: [],
    stock: 100
  }
];

mongoose.connect('mongodb+srv://deepakmagdum769_db_user:i68nj8MUOc5MpUcl@cluster0.hlprsxv.mongodb.net/shopez?appName=Cluster0')
  .then(async () => {
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('✅ Sample products seeded successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });

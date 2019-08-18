import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  descriptionMarkdown: {
    type: String,
  },
  detailMarkdown: {
    type: String,
  },
  images: [{
    fullUrl: {
      type: String,
    },
  }],
  material: {
    type: String,
  },
  price: {
    amount: {
      required: true,
      type: Number,
    },
  },
  quantity: {
    required: true,
    type: Number,
  },
  slug: {
    required: true,
    type: String,
    unique: true,
  },
  title: {
    required: true,
    type: String,
  },
  variants: [{
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  }],
  category: {
    type: String,
  },
}, { timestamps: true })

export default mongoose.model('Product', productSchema)

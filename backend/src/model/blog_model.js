import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    author: {
      name: { type: String, default: 'Anni Software Editorial' },
      role: { type: String, default: 'Engineering Team' },
      avatar: { type: String, default: '' }
    },
    category: { type: String, required: true },
    tags: [{ type: String }],
    cover: { type: String, required: true },
    summary: { type: String, required: true },
    body: { type: String, required: true },
    readingTime: { type: String, default: '5 min read' },
    isPublished: { type: Boolean, default: true },
    publishedAt: { type: Date, default: Date.now },
    seo: {
      metaTitle: String,
      metaDescription: String
    }
  },
  { timestamps: true }
);

export const BlogModel = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

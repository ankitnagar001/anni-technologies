import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: [{ type: String, required: true }],
    industry: { type: String, required: true },
    client: { type: String, required: true },
    year: { type: String, default: '2025' },
    duration: { type: String, default: '' },
    teamSize: { type: String, default: '' },
    platforms: [{ type: String }],
    cover: { type: String, required: true },
    gallery: [{ type: String }],
    summary: { type: String, required: true },
    challenge: { type: String, default: '' },
    solution: { type: String, default: '' },
    results: [
      {
        metric: String,
        label: String
      }
    ],
    techStack: [{ type: String }],
    links: {
      liveUrl: String,
      appStoreUrl: String,
      playStoreUrl: String
    },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    seo: {
      metaTitle: String,
      metaDescription: String
    }
  },
  { timestamps: true }
);

export const ProjectModel = mongoose.models.Project || mongoose.model('Project', projectSchema);

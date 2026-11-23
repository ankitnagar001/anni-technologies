import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true },
    icon: { type: String, default: 'Code2' },
    summary: { type: String, required: true },
    capabilities: [{ type: String }],
    techStack: [{ type: String }],
    processSteps: [
      {
        step: Number,
        title: String,
        description: String
      }
    ],
    pricingGuide: {
      startingRange: String,
      typicalTimeline: String
    },
    faqs: [
      {
        question: String,
        answer: String
      }
    ],
    relatedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    order: { type: Number, default: 0 },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String]
    }
  },
  { timestamps: true }
);

export const ServiceModel = mongoose.models.Service || mongoose.model('Service', serviceSchema);

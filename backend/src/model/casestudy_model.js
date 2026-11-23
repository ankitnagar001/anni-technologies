import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    client: { type: String, required: true },
    industry: { type: String, required: true },
    services: [{ type: String }],
    headlineMetrics: [
      {
        value: String,
        label: String
      }
    ],
    cover: { type: String, required: true },
    executiveSummary: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    solutionArchitecture: { type: String, default: '' },
    results: [
      {
        metric: String,
        description: String
      }
    ],
    testimonial: {
      quote: String,
      author: String,
      role: String,
      company: String,
      avatar: String
    },
    pdfUrl: { type: String, default: '' },
    relatedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    seo: {
      metaTitle: String,
      metaDescription: String
    }
  },
  { timestamps: true }
);

export const CaseStudyModel = mongoose.models.CaseStudy || mongoose.model('CaseStudy', caseStudySchema);

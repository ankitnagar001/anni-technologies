import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ['Frontend', 'Backend', 'Mobile', 'Database', 'Cloud/DevOps', 'AI/ML', 'Game', 'Testing', 'Tools'],
      required: true
    },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    level: {
      type: String,
      enum: ['Core Stack', 'Advanced Expertise', 'Production Ready'],
      default: 'Production Ready'
    },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const TechnologyModel = mongoose.models.Technology || mongoose.model('Technology', technologySchema);

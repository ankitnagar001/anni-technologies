import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    department: { type: String, required: true },
    location: { type: String, default: 'Remote / Hybrid' },
    type: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      default: 'Full-time'
    },
    experience: { type: String, default: '2+ years' },
    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    requirements: [{ type: String }],
    benefits: [{ type: String }],
    status: {
      type: String,
      enum: ['active', 'closed'],
      default: 'active'
    }
  },
  { timestamps: true }
);

export const JobModel = mongoose.models.Job || mongoose.model('Job', jobSchema);

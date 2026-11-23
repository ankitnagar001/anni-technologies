import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    portfolioUrl: { type: String, default: '' },
    resumeUrl: { type: String, required: true },
    coverNote: { type: String, default: '' },
    status: {
      type: String,
      enum: ['submitted', 'reviewing', 'shortlisted', 'rejected'],
      default: 'submitted'
    }
  },
  { timestamps: true }
);

export const ApplicationModel = mongoose.models.Application || mongoose.model('Application', applicationSchema);

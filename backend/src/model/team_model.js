import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true },
    department: {
      type: String,
      enum: ['Leadership', 'Engineering', 'Design', 'Product', 'QA & DevOps'],
      required: true
    },
    photo: { type: String, required: true },
    bio: { type: String, required: true },
    skills: [{ type: String }],
    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String
    },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const TeamModel = mongoose.models.Team || mongoose.model('Team', teamSchema);

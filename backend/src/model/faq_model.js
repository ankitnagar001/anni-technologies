import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: {
      type: String,
      enum: ['General', 'Services', 'Pricing & Engagement', 'Process', 'Security & IP'],
      default: 'General'
    },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const FaqModel = mongoose.models.Faq || mongoose.model('Faq', faqSchema);

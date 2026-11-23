import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    photo: { type: String, default: '' },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    quote: { type: String, required: true },
    videoUrl: { type: String, default: '' },
    industry: { type: String, default: 'Technology' },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const TestimonialModel = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);

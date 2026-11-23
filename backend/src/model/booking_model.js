import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: '' },
    company: { type: String, default: '' },
    topic: { type: String, required: true },
    slot: { type: Date, required: true },
    timezone: { type: String, default: 'UTC' },
    notes: { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

export const BookingModel = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

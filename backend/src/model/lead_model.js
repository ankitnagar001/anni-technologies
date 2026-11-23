import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['contact', 'project', 'consultation'],
      default: 'contact'
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: '' },
    company: { type: String, default: '' },
    service: { type: String, default: '' },
    budget: { type: String, default: '' },
    timeline: { type: String, default: '' },
    message: { type: String, default: '' },
    payload: { type: mongoose.Schema.Types.Mixed, default: {} },
    attachmentUrl: { type: String, default: '' },
    utm: {
      source: String,
      medium: String,
      campaign: String,
      term: String,
      content: String
    },
    sourcePage: { type: String, default: '/' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new'
    },
    assignedTo: { type: String, default: 'Unassigned' }
  },
  { timestamps: true }
);

export const LeadModel = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

import { LeadModel } from '../model/lead_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { sendEmail } from '../utils/sendEmail.js';

export const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, company, service, budget, timeline, message, type, utm, sourcePage, payload } = req.body;

    if (!name || !email) {
      throw new ApiError(400, 'Name and email are required');
    }

    const newLead = await LeadModel.create({
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
      type: type || 'contact',
      utm,
      sourcePage,
      payload
    });

    // Notify team asynchronously
    sendEmail({
      to: process.env.ADMIN_EMAIL || 'admin@annisoftware.com',
      subject: `New Lead: [${newLead.type.toUpperCase()}] ${name} from ${company || 'Individual'}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'General'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
      `
    }).catch(err => console.error('Lead email alert error:', err));

    // Confirmation email to client
    sendEmail({
      to: email,
      subject: `Thank you for reaching out to Anni Software`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting Anni Software. Our engineering team has received your project request and will review it promptly.</p>
        <p>One of our technical consultants will reach out to you within 24 hours.</p>
        <br/>
        <p>Warm regards,<br/><strong>Anni Software Team</strong></p>
      `
    }).catch(err => console.error('Client confirmation email error:', err));

    return res.status(201).json(new ApiResponse(201, newLead, 'Your inquiry has been submitted successfully!'));
  } catch (error) {
    next(error);
  }
};

export const getLeads = async (req, res, next) => {
  try {
    const { status, type, search, page = 1, limit = 20 } = req.query;
    const query = {};

    if (status) query.status = status;
    if (type) query.type = type;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [leads, total] = await Promise.all([
      LeadModel.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      LeadModel.countDocuments(query)
    ]);

    return res.status(200).json(
      new ApiResponse(200, {
        leads,
        pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) }
      }, 'Leads fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};

export const updateLead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, assignedTo } = req.body;

    const lead = await LeadModel.findByIdAndUpdate(
      id,
      { ...(status && { status }), ...(assignedTo && { assignedTo }) },
      { new: true }
    );

    if (!lead) throw new ApiError(404, 'Lead not found');

    return res.status(200).json(new ApiResponse(200, lead, 'Lead updated successfully'));
  } catch (error) {
    next(error);
  }
};

export const deleteLead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const lead = await LeadModel.findByIdAndDelete(id);
    if (!lead) throw new ApiError(404, 'Lead not found');

    return res.status(200).json(new ApiResponse(200, null, 'Lead deleted successfully'));
  } catch (error) {
    next(error);
  }
};

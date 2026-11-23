import { BookingModel } from '../model/booking_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { sendEmail } from '../utils/sendEmail.js';

export const createBooking = async (req, res, next) => {
  try {
    const { name, email, phone, company, topic, slot, timezone, notes } = req.body;

    if (!name || !email || !topic || !slot) {
      throw new ApiError(400, 'Name, email, topic, and slot are required');
    }

    const booking = await BookingModel.create({
      name,
      email,
      phone,
      company,
      topic,
      slot: new Date(slot),
      timezone: timezone || 'UTC',
      notes
    });

    sendEmail({
      to: email,
      subject: `Consultation Confirmed: ${topic} with Anni Software`,
      html: `
        <h3>Your consultation has been scheduled!</h3>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Date & Time:</strong> ${new Date(slot).toUTCString()}</p>
        <p><strong>Timezone:</strong> ${timezone || 'UTC'}</p>
        <p>A calendar invite with video link will be sent prior to the meeting.</p>
      `
    }).catch(err => console.error('Booking confirmation error:', err));

    return res.status(201).json(new ApiResponse(201, booking, 'Consultation booked successfully'));
  } catch (error) {
    next(error);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const bookings = await BookingModel.find().sort({ slot: -1 });
    return res.status(200).json(new ApiResponse(200, bookings, 'Bookings retrieved successfully'));
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const booking = await BookingModel.findByIdAndUpdate(
      id,
      { ...(status && { status }), ...(notes && { notes }) },
      { new: true }
    );

    if (!booking) throw new ApiError(404, 'Booking not found');

    return res.status(200).json(new ApiResponse(200, booking, 'Booking updated successfully'));
  } catch (error) {
    next(error);
  }
};

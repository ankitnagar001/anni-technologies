import { TestimonialModel } from '../model/testimonial_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';

export const getTestimonials = async (req, res, next) => {
  try {
    const { industry } = req.query;
    const query = industry && industry.toLowerCase() !== 'all' ? { industry } : {};
    const testimonials = await TestimonialModel.find(query).sort({ order: 1, createdAt: -1 });
    return res.status(200).json(new ApiResponse(200, testimonials, 'Testimonials retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createTestimonial = async (req, res, next) => {
  try {
    const { name, role, company, quote, rating, photo, videoUrl, industry, order } = req.body;
    if (!name || !role || !company || !quote) {
      throw new ApiError(400, 'Name, role, company, and quote are required');
    }
    const testimonial = await TestimonialModel.create({
      name,
      role,
      company,
      quote,
      rating: rating || 5,
      photo,
      videoUrl,
      industry,
      order: order || 0
    });
    return res.status(201).json(new ApiResponse(201, testimonial, 'Testimonial added'));
  } catch (error) {
    next(error);
  }
};

export const updateTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await TestimonialModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!testimonial) throw new ApiError(404, 'Testimonial not found');
    return res.status(200).json(new ApiResponse(200, testimonial, 'Testimonial updated'));
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await TestimonialModel.findByIdAndDelete(id);
    if (!testimonial) throw new ApiError(404, 'Testimonial not found');
    return res.status(200).json(new ApiResponse(200, null, 'Testimonial deleted'));
  } catch (error) {
    next(error);
  }
};

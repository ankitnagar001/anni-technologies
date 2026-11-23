import { FaqModel } from '../model/faq_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';

export const getFaqs = async (req, res, next) => {
  try {
    const { category } = req.query;
    const query = category && category.toLowerCase() !== 'all' ? { category } : {};
    const faqs = await FaqModel.find(query).sort({ order: 1, createdAt: 1 });
    return res.status(200).json(new ApiResponse(200, faqs, 'FAQs retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createFaq = async (req, res, next) => {
  try {
    const { question, answer, category, order } = req.body;
    if (!question || !answer) {
      throw new ApiError(400, 'Question and answer are required');
    }
    const faq = await FaqModel.create({ question, answer, category, order });
    return res.status(201).json(new ApiResponse(201, faq, 'FAQ created'));
  } catch (error) {
    next(error);
  }
};

export const updateFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    const faq = await FaqModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!faq) throw new ApiError(404, 'FAQ not found');
    return res.status(200).json(new ApiResponse(200, faq, 'FAQ updated'));
  } catch (error) {
    next(error);
  }
};

export const deleteFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    const faq = await FaqModel.findByIdAndDelete(id);
    if (!faq) throw new ApiError(404, 'FAQ not found');
    return res.status(200).json(new ApiResponse(200, null, 'FAQ deleted'));
  } catch (error) {
    next(error);
  }
};

import { CaseStudyModel } from '../model/casestudy_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { slugify } from '../utils/slugify.js';

export const getCaseStudies = async (req, res, next) => {
  try {
    const { industry, featured } = req.query;
    const query = {};
    if (industry) query.industry = new RegExp(industry, 'i');
    if (featured === 'true') query.featured = true;

    const caseStudies = await CaseStudyModel.find(query).sort({ featured: -1, createdAt: -1 });
    return res.status(200).json(new ApiResponse(200, caseStudies, 'Case studies retrieved successfully'));
  } catch (error) {
    next(error);
  }
};

export const getCaseStudyBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const caseStudy = await CaseStudyModel.findOne({ slug }).populate('relatedProjects');
    if (!caseStudy) {
      throw new ApiError(404, `Case study '${slug}' not found`);
    }
    return res.status(200).json(new ApiResponse(200, caseStudy, 'Case study details retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createCaseStudy = async (req, res, next) => {
  try {
    const { title, client, industry, cover, executiveSummary, challenge, solution } = req.body;
    if (!title || !client || !cover || !executiveSummary || !challenge || !solution) {
      throw new ApiError(400, 'Title, client, cover, summary, challenge, and solution are required');
    }

    const slug = slugify(title);
    const caseStudy = await CaseStudyModel.create({ ...req.body, slug });
    return res.status(201).json(new ApiResponse(201, caseStudy, 'Case study created successfully'));
  } catch (error) {
    next(error);
  }
};

export const updateCaseStudy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const caseStudy = await CaseStudyModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!caseStudy) throw new ApiError(404, 'Case study not found');
    return res.status(200).json(new ApiResponse(200, caseStudy, 'Case study updated successfully'));
  } catch (error) {
    next(error);
  }
};

export const deleteCaseStudy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const caseStudy = await CaseStudyModel.findByIdAndDelete(id);
    if (!caseStudy) throw new ApiError(404, 'Case study not found');
    return res.status(200).json(new ApiResponse(200, null, 'Case study deleted successfully'));
  } catch (error) {
    next(error);
  }
};

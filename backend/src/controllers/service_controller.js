import { ServiceModel } from '../model/service_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { slugify } from '../utils/slugify.js';

export const getServices = async (req, res, next) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const services = await ServiceModel.find(query).sort({ order: 1, createdAt: 1 });
    return res.status(200).json(new ApiResponse(200, services, 'Services retrieved successfully'));
  } catch (error) {
    next(error);
  }
};

export const getServiceBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const service = await ServiceModel.findOne({ slug }).populate('relatedProjects');
    if (!service) {
      throw new ApiError(404, `Service with slug '${slug}' not found`);
    }
    return res.status(200).json(new ApiResponse(200, service, 'Service details retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createService = async (req, res, next) => {
  try {
    const { title, summary, category, icon, capabilities, techStack, processSteps, pricingGuide, faqs, order, seo } = req.body;
    if (!title || !summary || !category) {
      throw new ApiError(400, 'Title, summary, and category are required');
    }

    const slug = slugify(title);
    const existing = await ServiceModel.findOne({ slug });
    if (existing) {
      throw new ApiError(400, `A service with slug '${slug}' already exists`);
    }

    const service = await ServiceModel.create({
      title,
      slug,
      summary,
      category,
      icon: icon || 'Code2',
      capabilities: capabilities || [],
      techStack: techStack || [],
      processSteps: processSteps || [],
      pricingGuide: pricingGuide || {},
      faqs: faqs || [],
      order: order || 0,
      seo: seo || {}
    });

    return res.status(201).json(new ApiResponse(201, service, 'Service created successfully'));
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await ServiceModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!service) throw new ApiError(404, 'Service not found');
    return res.status(200).json(new ApiResponse(200, service, 'Service updated successfully'));
  } catch (error)
  {
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await ServiceModel.findByIdAndDelete(id);
    if (!service) throw new ApiError(404, 'Service not found');
    return res.status(200).json(new ApiResponse(200, null, 'Service deleted successfully'));
  } catch (error) {
    next(error);
  }
};

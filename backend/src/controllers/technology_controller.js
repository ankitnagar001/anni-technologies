import { TechnologyModel } from '../model/technology_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';

export const getTechnologies = async (req, res, next) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const technologies = await TechnologyModel.find(query).sort({ order: 1, name: 1 });
    return res.status(200).json(new ApiResponse(200, technologies, 'Technologies retrieved successfully'));
  } catch (error) {
    next(error);
  }
};

export const createTechnology = async (req, res, next) => {
  try {
    const { name, category, logo, description, level, order } = req.body;
    if (!name || !category || !logo || !description) {
      throw new ApiError(400, 'Name, category, logo, and description are required');
    }
    const tech = await TechnologyModel.create({ name, category, logo, description, level, order });
    return res.status(201).json(new ApiResponse(201, tech, 'Technology created successfully'));
  } catch (error) {
    next(error);
  }
};

export const updateTechnology = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tech = await TechnologyModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!tech) throw new ApiError(404, 'Technology not found');
    return res.status(200).json(new ApiResponse(200, tech, 'Technology updated successfully'));
  } catch (error) {
    next(error);
  }
};

export const deleteTechnology = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tech = await TechnologyModel.findByIdAndDelete(id);
    if (!tech) throw new ApiError(404, 'Technology not found');
    return res.status(200).json(new ApiResponse(200, null, 'Technology deleted successfully'));
  } catch (error) {
    next(error);
  }
};

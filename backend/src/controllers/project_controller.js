import { ProjectModel } from '../model/project_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { slugify } from '../utils/slugify.js';

export const getProjects = async (req, res, next) => {
  try {
    const { category, type, search, featured, page = 1, limit = 12 } = req.query;
    const query = {};

    const activeFilter = type || category;
    if (activeFilter && activeFilter.toLowerCase() !== 'all') {
      query.category = { $in: [new RegExp(activeFilter, 'i')] };
    }

    if (featured === 'true') {
      query.featured = true;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { summary: { $regex: search, $options: 'i' } },
        { client: { $regex: search, $options: 'i' } },
        { techStack: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [projects, total] = await Promise.all([
      ProjectModel.find(query).sort({ featured: -1, order: 1, createdAt: -1 }).skip(skip).limit(Number(limit)),
      ProjectModel.countDocuments(query)
    ]);

    return res.status(200).json(
      new ApiResponse(200, {
        projects,
        pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) }
      }, 'Projects fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};

export const getProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const project = await ProjectModel.findOne({ slug });
    if (!project) {
      throw new ApiError(404, `Project with slug '${slug}' not found`);
    }

    const relatedProjects = await ProjectModel.find({
      _id: { $ne: project._id },
      category: { $in: project.category }
    }).limit(3);

    return res.status(200).json(new ApiResponse(200, { project, relatedProjects }, 'Project details retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const { title, client, industry, category, cover, summary } = req.body;
    if (!title || !client || !cover || !summary) {
      throw new ApiError(400, 'Title, client, cover image, and summary are required');
    }

    const slug = slugify(title);
    const project = await ProjectModel.create({
      ...req.body,
      slug,
      category: Array.isArray(category) ? category : [category || 'Web']
    });

    return res.status(201).json(new ApiResponse(201, project, 'Project created successfully'));
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!project) throw new ApiError(404, 'Project not found');
    return res.status(200).json(new ApiResponse(200, project, 'Project updated successfully'));
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findByIdAndDelete(id);
    if (!project) throw new ApiError(404, 'Project not found');
    return res.status(200).json(new ApiResponse(200, null, 'Project deleted successfully'));
  } catch (error) {
    next(error);
  }
};

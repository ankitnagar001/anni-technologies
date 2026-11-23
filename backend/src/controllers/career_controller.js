import { JobModel } from '../model/job_model.js';
import { ApplicationModel } from '../model/application_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { slugify } from '../utils/slugify.js';

export const getJobs = async (req, res, next) => {
  try {
    const { department, type, status = 'active' } = req.query;
    const query = { status };
    if (department && department.toLowerCase() !== 'all') query.department = department;
    if (type && type.toLowerCase() !== 'all') query.type = type;

    const jobs = await JobModel.find(query).sort({ createdAt: -1 });
    return res.status(200).json(new ApiResponse(200, jobs, 'Jobs fetched successfully'));
  } catch (error) {
    next(error);
  }
};

export const getJobBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const job = await JobModel.findOne({ slug });
    if (!job) throw new ApiError(404, `Job opening '${slug}' not found`);
    return res.status(200).json(new ApiResponse(200, job, 'Job details retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createJob = async (req, res, next) => {
  try {
    const { title, department, location, type, experience, description, responsibilities, requirements, benefits } = req.body;
    if (!title || !department || !description) {
      throw new ApiError(400, 'Title, department, and description are required');
    }

    const slug = slugify(title);
    const job = await JobModel.create({ ...req.body, slug });
    return res.status(201).json(new ApiResponse(201, job, 'Job posting created'));
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await JobModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!job) throw new ApiError(404, 'Job not found');
    return res.status(200).json(new ApiResponse(200, job, 'Job updated'));
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await JobModel.findByIdAndDelete(id);
    if (!job) throw new ApiError(404, 'Job not found');
    return res.status(200).json(new ApiResponse(200, null, 'Job deleted'));
  } catch (error) {
    next(error);
  }
};

export const applyJob = async (req, res, next) => {
  try {
    const { jobId } = req.params;
    const { fullName, email, phone, resumeUrl, portfolioUrl, coverNote } = req.body;

    if (!fullName || !email || !phone || !resumeUrl) {
      throw new ApiError(400, 'Full name, email, phone, and resume URL are required');
    }

    const application = await ApplicationModel.create({
      jobId,
      fullName,
      email,
      phone,
      resumeUrl,
      portfolioUrl,
      coverNote
    });

    return res.status(201).json(new ApiResponse(201, application, 'Application submitted successfully!'));
  } catch (error) {
    next(error);
  }
};

export const getApplications = async (req, res, next) => {
  try {
    const { jobId } = req.query;
    const query = jobId ? { jobId } : {};
    const applications = await ApplicationModel.find(query).populate('jobId', 'title department').sort({ createdAt: -1 });
    return res.status(200).json(new ApiResponse(200, applications, 'Applications retrieved'));
  } catch (error) {
    next(error);
  }
};

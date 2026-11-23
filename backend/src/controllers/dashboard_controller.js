import { LeadModel } from '../model/lead_model.js';
import { BookingModel } from '../model/booking_model.js';
import { ProjectModel } from '../model/project_model.js';
import { ServiceModel } from '../model/service_model.js';
import { BlogModel } from '../model/blog_model.js';
import { ApplicationModel } from '../model/application_model.js';
import { ApiResponse } from '../utils/apiResponse.js';

export const getDashboardStats = async (req, res, next) => {
  try {
    const [
      totalLeads,
      newLeads,
      totalBookings,
      totalProjects,
      totalServices,
      totalBlogs,
      totalApplications,
      recentLeads,
      recentBookings
    ] = await Promise.all([
      LeadModel.countDocuments(),
      LeadModel.countDocuments({ status: 'new' }),
      BookingModel.countDocuments(),
      ProjectModel.countDocuments(),
      ServiceModel.countDocuments(),
      BlogModel.countDocuments(),
      ApplicationModel.countDocuments(),
      LeadModel.find().sort({ createdAt: -1 }).limit(5),
      BookingModel.find().sort({ createdAt: -1 }).limit(5)
    ]);

    const stats = {
      overview: {
        totalLeads,
        newLeads,
        totalBookings,
        totalProjects,
        totalServices,
        totalBlogs,
        totalApplications
      },
      recentLeads,
      recentBookings
    };

    return res.status(200).json(new ApiResponse(200, stats, 'Dashboard statistics retrieved'));
  } catch (error) {
    next(error);
  }
};

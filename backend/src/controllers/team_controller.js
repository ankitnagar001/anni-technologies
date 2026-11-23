import { TeamModel } from '../model/team_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';

export const getTeam = async (req, res, next) => {
  try {
    const { department } = req.query;
    const query = department && department.toLowerCase() !== 'all' ? { department } : {};
    const team = await TeamModel.find(query).sort({ order: 1, createdAt: 1 });
    return res.status(200).json(new ApiResponse(200, team, 'Team members retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createTeamMember = async (req, res, next) => {
  try {
    const { name, role, department, photo, bio, skills, socialLinks, order } = req.body;
    if (!name || !role || !department || !photo || !bio) {
      throw new ApiError(400, 'Name, role, department, photo, and bio are required');
    }
    const member = await TeamModel.create({ name, role, department, photo, bio, skills, socialLinks, order });
    return res.status(201).json(new ApiResponse(201, member, 'Team member added successfully'));
  } catch (error) {
    next(error);
  }
};

export const updateTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await TeamModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!member) throw new ApiError(404, 'Team member not found');
    return res.status(200).json(new ApiResponse(200, member, 'Team member updated'));
  } catch (error) {
    next(error);
  }
};

export const deleteTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await TeamModel.findByIdAndDelete(id);
    if (!member) throw new ApiError(404, 'Team member not found');
    return res.status(200).json(new ApiResponse(200, null, 'Team member deleted'));
  } catch (error) {
    next(error);
  }
};

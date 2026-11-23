import { BlogModel } from '../model/blog_model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { slugify } from '../utils/slugify.js';

export const getBlogs = async (req, res, next) => {
  try {
    const { category, search, page = 1, limit = 9 } = req.query;
    const query = { isPublished: true };

    if (category && category.toLowerCase() !== 'all') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { summary: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [posts, total] = await Promise.all([
      BlogModel.find(query).sort({ publishedAt: -1 }).skip(skip).limit(Number(limit)),
      BlogModel.countDocuments(query)
    ]);

    return res.status(200).json(
      new ApiResponse(200, {
        posts,
        pagination: { total, page: Number(page), pages: Math.ceil(total / Number(limit)) }
      }, 'Blogs fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const post = await BlogModel.findOne({ slug });
    if (!post) throw new ApiError(404, `Blog post '${slug}' not found`);

    const relatedPosts = await BlogModel.find({
      _id: { $ne: post._id },
      category: post.category
    }).limit(3);

    return res.status(200).json(new ApiResponse(200, { post, relatedPosts }, 'Blog post details retrieved'));
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const { title, category, cover, summary, body, tags, readingTime } = req.body;
    if (!title || !category || !cover || !summary || !body) {
      throw new ApiError(400, 'Title, category, cover, summary, and body are required');
    }

    const slug = slugify(title);
    const post = await BlogModel.create({
      ...req.body,
      slug,
      readingTime: readingTime || `${Math.ceil(body.split(' ').length / 200)} min read`
    });

    return res.status(201).json(new ApiResponse(201, post, 'Blog post created successfully'));
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!post) throw new ApiError(404, 'Blog post not found');
    return res.status(200).json(new ApiResponse(200, post, 'Blog post updated successfully'));
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await BlogModel.findByIdAndDelete(id);
    if (!post) throw new ApiError(404, 'Blog post not found');
    return res.status(200).json(new ApiResponse(200, null, 'Blog post deleted successfully'));
  } catch (error) {
    next(error);
  }
};

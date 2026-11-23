import baseSlugify from 'slugify';

export const slugify = (text) => {
  if (!text) return '';
  return baseSlugify(text, {
    lower: true,
    strict: true,
    trim: true
  });
};

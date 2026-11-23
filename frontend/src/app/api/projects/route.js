import { NextResponse } from 'next/server';
import { defaultProjects } from '../../../component/data/projects_data.js';

// In-memory runtime cache for seamless additions during local execution
let projectsStore = [...defaultProjects];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filtered = [...projectsStore];

    if (category && category.toLowerCase() !== 'all') {
      filtered = filtered.filter((p) => {
        const cats = Array.isArray(p.category) ? p.category : [p.category];
        const badge = p.badge || '';
        return (
          cats.some((c) => c.toLowerCase() === category.toLowerCase()) ||
          badge.toLowerCase().includes(category.toLowerCase()) ||
          (p.eyebrow && p.eyebrow.toLowerCase() === category.toLowerCase())
        );
      });
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.summary?.toLowerCase().includes(q) ||
          p.industry?.toLowerCase().includes(q) ||
          p.techStack?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      total: filtered.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      title,
      subtitle = '',
      badge = 'Web Application',
      category = ['Web'],
      eyebrow = '',
      industry = 'Technology',
      client = 'Client',
      cover,
      summary,
      techStack = [],
      liveUrl = '',
      caseStudySlug = '',
      featured = false
    } = body;

    if (!title || !summary) {
      return NextResponse.json(
        { success: false, message: 'Title and summary are required' },
        { status: 400 }
      );
    }

    const newProject = {
      id: `proj-${Date.now()}`,
      title,
      subtitle,
      badge,
      category: Array.isArray(category)
        ? category
        : category.split(',').map((c) => c.trim()).filter(Boolean),
      eyebrow: eyebrow || (category[0] || 'SOFTWARE').toUpperCase(),
      industry,
      client,
      cover:
        cover ||
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      summary,
      techStack: Array.isArray(techStack)
        ? techStack
        : techStack.split(',').map((t) => t.trim()).filter(Boolean),
      liveUrl,
      caseStudySlug,
      featured: Boolean(featured)
    };

    projectsStore.unshift(newProject);

    return NextResponse.json(
      {
        success: true,
        data: newProject,
        message: 'Project uploaded successfully'
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Project ID is required' },
        { status: 400 }
      );
    }

    const initialLen = projectsStore.length;
    projectsStore = projectsStore.filter((p) => p.id !== id);

    if (projectsStore.length === initialLen) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

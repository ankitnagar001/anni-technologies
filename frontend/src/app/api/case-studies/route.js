import { NextResponse } from 'next/server';
import { defaultCaseStudies } from '../../../component/data/casestudies_data.js';

let caseStudiesStore = [...defaultCaseStudies];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    let filtered = [...caseStudiesStore];

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title?.toLowerCase().includes(q) ||
          c.summary?.toLowerCase().includes(q) ||
          c.client?.toLowerCase().includes(q) ||
          c.tags?.some((t) => t.toLowerCase().includes(q))
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
      client = 'Client',
      industry = 'General',
      tags = ['Web', 'Mobile'],
      cover,
      mockupImage,
      summary,
      challenge = '',
      solution = '',
      metrics = [],
      featured = true
    } = body;

    if (!title || !summary) {
      return NextResponse.json(
        { success: false, message: 'Title and summary are required' },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    const newCaseStudy = {
      id: `cs-${Date.now()}`,
      title,
      slug,
      client,
      industry,
      tags: Array.isArray(tags)
        ? tags
        : tags.split(',').map((t) => t.trim()).filter(Boolean),
      cover:
        cover ||
        'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
      mockupImage:
        mockupImage ||
        cover ||
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=80',
      summary,
      metrics: Array.isArray(metrics) && metrics.length > 0 ? metrics : [
        { metric: '+150%', label: 'Efficiency Growth' },
        { metric: '99.9%', label: 'Platform Reliability' }
      ],
      challenge,
      solution,
      featured: Boolean(featured)
    };

    caseStudiesStore.unshift(newCaseStudy);

    return NextResponse.json(
      {
        success: true,
        data: newCaseStudy,
        message: 'Case study created successfully'
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
        { success: false, message: 'Case Study ID is required' },
        { status: 400 }
      );
    }

    const initialLen = caseStudiesStore.length;
    caseStudiesStore = caseStudiesStore.filter((c) => c.id !== id);

    if (caseStudiesStore.length === initialLen) {
      return NextResponse.json(
        { success: false, message: 'Case study not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Case study deleted successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

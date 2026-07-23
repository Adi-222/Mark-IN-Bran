import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';


export async function POST(request: NextRequest) {
  try {
    const { title, slug, excerpt, content, mainImage, published } = await request.json();

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        mainImage,
        published: published ?? true,
      }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Slug must be unique' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

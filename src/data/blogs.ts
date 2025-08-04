import blogData from './blog-data.json';

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  preview: string;
  coverImage: string;
  coverImageHint: string;
  content: string;
}

export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export const blogPosts: BlogPost[] = blogData.blogs.map((post) => ({
  slug: generateSlug(post.title),
  title: post.title,
  author: post.author,
  date: new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  preview: `${post.content.substring(0, 150)}...`,
  coverImage: post.images[0] || 'https://placehold.co/600x400.png',
  coverImageHint: generateSlug(post.title),
  content: `<p>${post.content}</p>`,
}));

export function getBlogImages(slug: string): string[] {
    const post = blogData.blogs.find(p => generateSlug(p.title) === slug);
    return post?.images || [];
}
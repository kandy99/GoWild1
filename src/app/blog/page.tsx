import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Go Wild Explorer',
  description: 'Stories, tips, and insights to inspire your next Himalayan adventure.',
};

export default function BlogPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">From Our Blog</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Dive deep into the heart of Uttarakhand with our collection of stories, guides, and travelogues.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

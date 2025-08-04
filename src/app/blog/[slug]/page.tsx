import { notFound } from 'next/navigation';
import { blogPosts, getBlogImages } from '@/data/blogs';
import { Calendar, User } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import ImageCarousel from '@/components/common/ImageCarousel';

// export async function generateMetadata(
//   { params }: { params: { slug: string } },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // Temporarily return a minimal metadata object
//   return {
//     title: `Blog Post: ${params.slug}`,
//     description: 'This is a blog post.',
//   };
// }

// Keep the generateStaticParams function as is:
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const images = getBlogImages(post.slug);

  return (
    <article className="animate-fade-in">
      <div className="relative h-[40vh] md:h-[60vh] w-full">
         <ImageCarousel 
            images={images} 
            alt={post.title} 
            imageHint={post.coverImageHint} 
            containerClassName="h-full w-full"
          />
           <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto -mt-16 md:-mt-24 relative z-10">
          <div className="bg-background p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4 text-foreground">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-md text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none text-foreground/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
      <div className="pb-16 lg:pb-24"></div>
    </article>
  );
}

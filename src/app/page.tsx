import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DestinationGrid from '@/components/destinations/DestinationGrid';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogs';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col animate-fade-in">
      <section className="py-16 lg:py-24 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in-up space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight">
              Go Wild Explorer
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-muted-foreground">
              Discover the soul of the Himalayas, from serene valleys to majestic peaks.
            </p>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Top Destinations</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Journey through the most breathtaking and spiritually enriching locations in Uttarakhand.
            </p>
          </div>
          <DestinationGrid />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">From Our Blog</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Stories, tips, and insights to inspire your next Himalayan adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/blog">
                Read More Posts <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

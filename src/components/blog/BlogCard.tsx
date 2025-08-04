import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type BlogPost } from '@/data/blogs';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
       <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className="relative h-56 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            data-ai-hint={post.coverImageHint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="font-headline hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1.5" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5" />
            {post.date}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{post.preview}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto group/link">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

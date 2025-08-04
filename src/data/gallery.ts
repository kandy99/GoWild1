import { destinations } from './destinations';
import blogData from './blog-data.json';
import { generateSlug } from './blogs';

export interface GalleryImage {
  src: string;
  alt: string;
  hint: string;
}

const destinationImages: GalleryImage[] = destinations.flatMap(destination =>
  (destination.images || []).map(image => ({
    src: image,
    alt: destination.name,
    hint: destination.imageHint,
  }))
);

const blogImages: GalleryImage[] = blogData.blogs.flatMap(post =>
  (post.images || []).map(image => ({
    src: image,
    alt: post.title,
    hint: generateSlug(post.title),
  }))
);


// Combine and remove duplicates based on the source URL
const allImages = [...destinationImages, ...blogImages];
const uniqueImages = Array.from(new Map(allImages.map(item => [item.src, item])).values());

// Shuffle the array for a more varied gallery layout
export const galleryImages: GalleryImage[] = uniqueImages.sort(() => Math.random() - 0.5);
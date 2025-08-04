import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Go Wild Explorer',
  description: 'A visual journey through the stunning landscapes and vibrant culture of Uttarakhand.',
};

export default function GalleryPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Gallery</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A visual journey through the stunning landscapes, vibrant culture, and serene beauty of Uttarakhand.
          </p>
        </div>
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { type GalleryImage } from '@/data/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg break-inside-avoid cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              data-ai-hint={image.hint}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2">
            {selectedImage && (
              <>
                <DialogHeader>
                  <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-auto">
                    <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-auto rounded-lg"
                    />
                </div>
              </>
            )}
        </DialogContent>
      </Dialog>
    </>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  imageHint?: string;
  containerClassName?: string;
  imageClassName?: string;
}

export default function ImageCarousel({
  images,
  alt,
  imageHint,
  containerClassName,
  imageClassName,
}: ImageCarouselProps) {
  if (!images || images.length === 0) {
    return (
       <div className={cn("relative bg-muted", containerClassName)}>
        <Image
          src="https://placehold.co/600x400.png"
          alt="Placeholder image"
          data-ai-hint="placeholder"
          fill
          className="object-cover"
        />
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={cn("relative h-full w-full", containerClassName)}>
        <Image
          src={images[0]}
          alt={alt}
          data-ai-hint={imageHint}
          fill
          className={cn("object-cover", imageClassName)}
          priority
        />
      </div>
    );
  }

  return (
    <Carousel className={cn("w-full h-full", containerClassName)}>
      <CarouselContent className="h-full">
        {images.map((src, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`${alt} - image ${index + 1}`}
                data-ai-hint={imageHint}
                fill
                className={cn("object-cover", imageClassName)}
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white bg-black/20 hover:bg-black/40 left-4" />
      <CarouselNext className="text-white bg-black/20 hover:bg-black/40 right-4" />
    </Carousel>
  );
}

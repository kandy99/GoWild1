import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type Destination } from '@/data/destinations';
import { Check } from 'lucide-react';
import ImageCarousel from '../common/ImageCarousel';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <ImageCarousel 
          images={destination.images}
          alt={destination.name}
          imageHint={destination.imageHint}
          containerClassName="h-full w-full"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{destination.name}</CardTitle>
        <CardDescription>{destination.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold mb-2 text-foreground/90">Highlights:</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {destination.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start">
              <Check className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

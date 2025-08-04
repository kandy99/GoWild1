import siteData from './site-data.json';

export interface Destination {
  name: string;
  description: string;
  images: string[];
  imageHint: string;
  highlights: string[];
}

export const destinations: Destination[] = siteData.destinations.map(dest => ({
  name: dest.name,
  description: dest.description,
  images: dest.images && dest.images.length > 0 ? dest.images : ['https://placehold.co/600x400.png'],
  imageHint: dest.name.toLowerCase().replace(/\s+/g, ' '),
  highlights: dest.highlights,
}));

export function getDestinationImages(name: string): string[] {
    const destination = siteData.destinations.find(d => d.name === name);
    return destination?.images || [];
}

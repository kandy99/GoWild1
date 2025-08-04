import type { Metadata } from 'next';
import InteractiveMap from '@/components/maps/InteractiveMap';

export const metadata: Metadata = {
  title: 'Interactive Map | Go Wild Explorer',
  description: 'Explore key destinations in Uttarakhand on our interactive map.',
};

export default function MapsPage() {
  return <InteractiveMap />;
}

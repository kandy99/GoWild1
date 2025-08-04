import { destinations } from '@/data/destinations';
import DestinationCard from './DestinationCard';

export default function DestinationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination) => (
        <DestinationCard key={destination.name} destination={destination} />
      ))}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MapPin, Search } from 'lucide-react';
import siteData from '@/data/site-data.json';

const destinations = siteData.destinations;

export default function InteractiveMap() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  const handleDestinationSelect = (destinationId: number) => {
    const destination = destinations.find(d => d.id === destinationId);
    if (destination) {
      setSelectedDestination(destination);
    }
  };
  
  const mapUrl = `https://maps.google.com/maps?q=${selectedDestination.coordinates.lat},${selectedDestination.coordinates.lng}&z=13&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${selectedDestination.coordinates.lat},${selectedDestination.coordinates.lng}`;

  return (
    <div className="bg-secondary animate-fade-in">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Interactive Map</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Select destinations to see them on the map and discover interesting facts about them.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  Destinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-4">
                    {destinations.map(dest => (
                      <div key={dest.id} className="flex items-start space-x-3 p-2 rounded-lg transition-colors hover:bg-muted">
                        <Checkbox
                          id={`dest-${dest.id}`}
                          checked={selectedDestination.id === dest.id}
                          onCheckedChange={() => handleDestinationSelect(dest.id)}
                          className="mt-1"
                        />
                        <label
                          htmlFor={`dest-${dest.id}`}
                          className="flex-1 cursor-pointer"
                        >
                          <span className="font-semibold text-foreground">{dest.name}</span>
                          <p className="text-sm text-muted-foreground">{dest.description}</p>
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>{selectedDestination.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-96 w-full rounded-lg overflow-hidden border">
                    <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={selectedDestination.name}
                    ></iframe>
                  </div>
                  <Button asChild className="mt-4 w-full">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                       <Search className="mr-2 h-4 w-4" />
                       View on Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fun Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    {selectedDestination.funFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import siteData from '@/data/site-data.json';
import Logo from "@/components/common/Logo";

export const metadata: Metadata = {
  title: 'About Us | Go Wild Explorer',
  description: 'Learn more about our mission to showcase the beauty of Uttarakhand.',
};

function BistanaHomestayMap() {
  // As this component needs access to window, it cannot be an RSC.
  'use client';
  const location = siteData.locations.bistana;
  // Note: This embed uses coordinates and does not require an API key for basic map display.
  const mapUrl = `https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`;

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Bistana Homestay Location"
    ></iframe>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-secondary animate-fade-in">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About Go Wild Explorer</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Our journey, our passion, and our promise to you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* About Us Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="flex items-center text-3xl font-headline font-bold">
                <Logo className="h-8 w-8 mr-3 text-primary" />
                Our Story
              </h2>
              <p className="text-foreground/80">
                Go Wild Explorer was born from a deep love for the Himalayas and a desire to share the unparalleled beauty of this 'Land of the Gods' with the world. We are a team of passionate travelers, writers, and local experts dedicated to providing authentic, insightful, and inspiring content about Uttarakhand.
              </p>
              <p className="text-foreground/80">
                From the bustling spiritual centers of Rishikesh to the serene, untouched villages of Kumaon, our mission is to be your trusted guide. We believe in responsible tourism that respects the local culture and fragile environment of this magnificent region.
              </p>
            </div>
             <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/710512361.jpg?k=fcd3dabb1aa639da8b675920dccdee7b2e464d49aaa23831989cb91c67d67a9b&o="
                alt="Bistana Homestay"
                data-ai-hint="homestay building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="text-center">
            <h2 className="flex items-center justify-center text-3xl font-headline font-bold">
              <Heart className="h-8 w-8 mr-3 text-primary" />
              Our Commitment
            </h2>
            <p className="text-foreground/80 mt-4 max-w-3xl mx-auto">
              We are committed to showcasing the authentic Uttarakhand. This means going beyond the popular tourist spots to uncover hidden gems, share local stories, and promote sustainable travel practices. We partner with local communities and businesses, like family-run homestays, to ensure that tourism benefits the people who call this place home. Your trust is our most valued asset.
            </p>
          </div>
          
          {/* Bistana Homestay Map Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline">
                 <Home className="h-6 w-6 mr-3 text-primary" />
                Bistana Homestay Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                We are partnered with Bistana, a beautiful homestay that offers an authentic local experience. Find its location below.
              </p>
              <div className="relative h-96 w-full rounded-lg overflow-hidden border">
                <BistanaHomestayMap />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

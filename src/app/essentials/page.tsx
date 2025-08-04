import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { essentialCategories } from "@/data/essentials";
import type { Metadata } from 'next';
import { Backpack, Shirt, BriefcaseMedical, Files, Camera, Check } from "lucide-react";

export const metadata: Metadata = {
  title: 'Travel Essentials | Go Wild Explorer',
  description: 'A comprehensive checklist of essentials for your trip to Uttarakhand.',
};

const iconMap: { [key: string]: React.ElementType } = {
  "Clothing": Shirt,
  "Trekking Gear": Backpack,
  "Documents & Essentials": Files,
  "Health & First Aid": BriefcaseMedical,
  "Electronics & Gadgets": Camera,
};

export default function EssentialsPage() {
  return (
    <div className="bg-secondary animate-fade-in">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Travel Essentials</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Your comprehensive checklist for a safe and comfortable journey in the Himalayas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {essentialCategories.map((category) => {
            const Icon = iconMap[category.name] || Backpack;
            return (
              <Card key={category.name} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-headline">
                    <Icon className="h-6 w-6 mr-3 text-primary" />
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}

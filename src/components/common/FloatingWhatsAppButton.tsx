'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/data/contact';

// A more standard and recognizable WhatsApp icon SVG
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.173 4.254 4.38-1.146.433.265z" />
  </svg>
);


export default function FloatingWhatsAppButton() {
  const whatsAppUrl = `https://wa.me/${contactInfo.whatsAppNumber}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1DA851] text-white z-50 transition-transform duration-200 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <Link href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-7 w-7" />
      </Link>
    </Button>
  );
}

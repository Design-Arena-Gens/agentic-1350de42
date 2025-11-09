import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Hotel } from '../types/hotel';

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <Link href={`/hotels/${hotel.slug}`} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-gray-900">
      <div className="relative h-52 w-full">
        <Image
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-900 shadow backdrop-blur">
          {hotel.propertyType}
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-1 text-base font-semibold">{hotel.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{hotel.city}, {hotel.country}</p>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Star className="h-3.5 w-3.5 fill-current" /> {hotel.rating.toFixed(1)}
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-lg font-semibold">${hotel.pricePerNight}</span>
            <span className="text-sm text-gray-500"> / night</span>
          </div>
          <div className="text-xs text-gray-500">Free cancellation</div>
        </div>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { hotels } from '../../../data/hotels';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import Link from 'next/link';
import { Check, MapPin, Star } from 'lucide-react';

export default function HotelDetailPage({ params }: { params: { slug: string } }) {
  const hotel = hotels.find((h) => h.slug === params.slug);
  if (!hotel) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold sm:text-3xl">{hotel.name}</h1>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <Star className="h-3.5 w-3.5 fill-current" /> {hotel.rating.toFixed(1)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {hotel.city}, {hotel.country}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">From</div>
                <div className="text-2xl font-semibold">${hotel.pricePerNight}<span className="text-sm font-normal text-gray-500">/night</span></div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {hotel.imageUrls.slice(0, 4).map((src, i) => (
                <div key={src} className={`relative h-64 overflow-hidden rounded-xl ${i === 0 ? 'sm:col-span-2' : ''}`}>
                  <Image src={src} alt={`${hotel.name} photo`} fill className="object-cover" />
                </div>
              ))}
            </div>

            <article className="prose prose-gray mt-6 max-w-none dark:prose-invert">
              <p>{hotel.description}</p>
            </article>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Amenities</h2>
              <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {hotel.amenities.map((a) => (
                  <li key={a} className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                    <Check className="h-4 w-4 text-emerald-500" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <div className="text-sm text-gray-500">Price</div>
            <div className="text-3xl font-semibold">${hotel.pricePerNight}<span className="ml-1 text-sm font-normal text-gray-500">/night</span></div>
            <Link
              href={{ pathname: '/checkout', query: { hotel: hotel.slug } }}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-4 py-3 font-medium text-white hover:bg-primary-700"
            >
              Reserve
            </Link>
            <p className="mt-3 text-xs text-gray-500">You will not be charged yet</p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

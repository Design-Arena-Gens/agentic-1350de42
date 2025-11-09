import { hotels } from '../../data/hotels';
import { HotelCard } from '../../components/HotelCard';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function SearchPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const q = (searchParams.q as string) || '';
  const list = hotels.filter((h) =>
    q ? `${h.city} ${h.country} ${h.name}`.toLowerCase().includes(q.toLowerCase()) : true
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">{q ? `Stays in ?${q}?` : 'Explore stays'}</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{list.length} places ? Free cancellation ? Best price guarantee</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

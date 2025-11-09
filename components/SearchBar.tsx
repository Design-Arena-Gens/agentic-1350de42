"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CalendarDays, MapPin, Users, Search } from 'lucide-react';

export function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [guests, setGuests] = useState(2);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set('q', destination);
    if (from) params.set('from', from);
    if (to) params.set('to', to);
    params.set('guests', String(guests));
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-2 rounded-2xl bg-white/95 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur md:grid-cols-5">
      <div className="group relative flex items-center gap-2 rounded-xl px-4 py-3 md:col-span-2">
        <MapPin className="h-5 w-5 text-primary-600" />
        <div className="flex-1">
          <label className="text-xs text-gray-500">Destination</label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="City, landmark, or hotel"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="group relative flex items-center gap-2 rounded-xl px-4 py-3">
        <CalendarDays className="h-5 w-5 text-primary-600" />
        <div className="flex-1">
          <label className="text-xs text-gray-500">Check in</label>
          <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="group relative flex items-center gap-2 rounded-xl px-4 py-3">
        <CalendarDays className="h-5 w-5 text-primary-600" />
        <div className="flex-1">
          <label className="text-xs text-gray-500">Check out</label>
          <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="group relative flex items-center gap-2 rounded-xl px-4 py-3">
        <Users className="h-5 w-5 text-primary-600" />
        <div className="flex-1">
          <label className="text-xs text-gray-500">Guests</label>
          <input
            type="number"
            min={1}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-white transition hover:bg-primary-700 md:justify-center"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
        <span>Search</span>
      </button>
    </form>
  );
}

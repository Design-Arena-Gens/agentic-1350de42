import Link from 'next/link';
import { Plane, Moon, Sun } from 'lucide-react';
"use client";
import { useEffect, useState } from 'react';

export function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-gray-950/80">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold">
          <Plane className="h-5 w-5 text-primary-600" />
          Voyago
        </Link>
        <nav className="hidden gap-6 text-sm sm:flex">
          <Link href="/search" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Stays</Link>
          <a href="#flights" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Flights</a>
          <a href="#experiences" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experiences</a>
        </nav>
        <button
          onClick={() => setDark((d) => !d)}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>
  );
}

"use client";
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { hotels } from '../../data/hotels';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function CheckoutPage() {
  const params = useSearchParams();
  const slug = params.get('hotel') || '';
  const hotel = useMemo(() => hotels.find((h) => h.slug === slug) || hotels[0], [slug]);
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold sm:text-3xl">Secure your stay</h1>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <form onSubmit={submit} className="space-y-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900 lg:col-span-2">
            <section>
              <h2 className="text-lg font-semibold">Traveler details</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="First name" required />
                <Input label="Last name" required />
                <Input label="Email" type="email" required className="sm:col-span-2" />
                <Input label="Phone" type="tel" required className="sm:col-span-2" />
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold">Payment</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Card number" placeholder="4242 4242 4242 4242" required className="sm:col-span-2" />
                <Input label="Expiry" placeholder="MM/YY" required />
                <Input label="CVC" placeholder="123" required />
              </div>
            </section>
            <button type="submit" className="w-full rounded-xl bg-primary-600 px-4 py-3 font-medium text-white hover:bg-primary-700">
              Confirm and pay
            </button>
            {submitted && (
              <p className="text-sm text-emerald-600">Success! Your reservation is confirmed. A confirmation email has been sent.</p>
            )}
          </form>

          <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <div className="text-sm text-gray-500">You	2re booking</div>
            <div className="mt-1 text-lg font-semibold">{hotel.name}</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{hotel.city}, {hotel.country}</div>
            <div className="mt-4 flex items-center justify-between">
              <span>Nightly price</span>
              <span className="font-medium">${hotel.pricePerNight}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Taxes and fees</span>
              <span>$0</span>
            </div>
            <div className="mt-3 border-t border-black/5 pt-3 dark:border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-semibold">${hotel.pricePerNight}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">You will not be charged until confirmation.</p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Input({ label, className = '', ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <div className="text-xs text-gray-500">{label}</div>
      <input
        {...props}
        className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-primary-600 transition focus:border-primary-300 focus:ring-2 dark:border-white/10 dark:bg-gray-950"
      />
    </label>
  );
}

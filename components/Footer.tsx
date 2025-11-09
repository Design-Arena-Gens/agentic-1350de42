export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-gray-50 py-10 text-sm text-gray-600 dark:border-white/10 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 sm:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Voyago</div>
          <p className="mt-2 max-w-xs">Your companion to discover, compare, and book unforgettable trips.</p>
        </div>
        <div>
          <div className="font-medium">Explore</div>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Destinations</a></li>
            <li><a href="#" className="hover:underline">Deals</a></li>
            <li><a href="#" className="hover:underline">Travel guides</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-6 text-xs text-gray-500">? {new Date().getFullYear()} Voyago, Inc.</div>
    </footer>
  );
}

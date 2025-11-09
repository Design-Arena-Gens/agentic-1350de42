export type Hotel = {
  id: string;
  slug: string;
  name: string;
  city: string;
  country: string;
  description: string;
  imageUrls: string[];
  rating: number;
  pricePerNight: number;
  amenities: string[];
  coordinates: { lat: number; lng: number };
  propertyType: 'Hotel' | 'Resort' | 'Apartment' | 'Villa' | 'Hostel';
};

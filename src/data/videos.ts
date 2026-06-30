export interface Video {
  id: string;
  title: string;
  category: 'Tech' | 'App Demo' | 'Home' | 'Lifestyle' | 'Unboxing' | 'Product Demo';
  thumbnail: string;
  /**
   * Full TikTok video URL, e.g. https://www.tiktok.com/@garrettcreates/video/1234567890123456789
   * Leave undefined to show the placeholder phone screen instead of a live embed.
   */
  tiktokUrl?: string;
}

export const categories = [
  'All',
  'Tech',
  'App Demo',
  'Home',
  'Lifestyle',
  'Unboxing',
  'Product Demo',
] as const;

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'Smart Home Hub Setup',
    category: 'Tech',
    thumbnail: 'https://placehold.co/360x780/1f2428/7dd4b4?text=Tech',
  },
  {
    id: 'v2',
    title: 'Budgeting App Walkthrough',
    category: 'App Demo',
    thumbnail: 'https://placehold.co/360x780/2c3236/3eb489?text=App+Demo',
  },
  {
    id: 'v3',
    title: 'Kitchen Gadget in Action',
    category: 'Home',
    thumbnail: 'https://placehold.co/360x780/3eb489/181c1f?text=Home',
  },
  {
    id: 'v4',
    title: 'Morning Routine Feature',
    category: 'Lifestyle',
    thumbnail: 'https://placehold.co/360x780/1f2428/7dd4b4?text=Lifestyle',
  },
  {
    id: 'v5',
    title: 'Tech Gadget Unboxing',
    category: 'Unboxing',
    thumbnail: 'https://placehold.co/360x780/2c3236/3eb489?text=Unboxing',
  },
  {
    id: 'v6',
    title: 'Home Organizer Demo',
    category: 'Product Demo',
    thumbnail: 'https://placehold.co/360x780/3eb489/181c1f?text=Product+Demo',
  },
];

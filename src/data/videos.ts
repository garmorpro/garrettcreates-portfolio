export interface Video {
  id: string;
  title: string;
  category: 'Tech' | 'App Demo' | 'Home' | 'Lifestyle' | 'Unboxing' | 'Product Demo';
  thumbnail: string;
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
    thumbnail: 'https://placehold.co/640x800/e8e4dc/1f1d1a?text=Tech',
  },
  {
    id: 'v2',
    title: 'Budgeting App Walkthrough',
    category: 'App Demo',
    thumbnail: 'https://placehold.co/640x800/e2a988/1f1d1a?text=App+Demo',
  },
  {
    id: 'v3',
    title: 'Kitchen Gadget in Action',
    category: 'Home',
    thumbnail: 'https://placehold.co/640x800/c1693f/faf8f5?text=Home',
  },
  {
    id: 'v4',
    title: 'Morning Routine Feature',
    category: 'Lifestyle',
    thumbnail: 'https://placehold.co/640x800/e8e4dc/1f1d1a?text=Lifestyle',
  },
  {
    id: 'v5',
    title: 'Tech Gadget Unboxing',
    category: 'Unboxing',
    thumbnail: 'https://placehold.co/640x800/e2a988/1f1d1a?text=Unboxing',
  },
  {
    id: 'v6',
    title: 'Home Organizer Demo',
    category: 'Product Demo',
    thumbnail: 'https://placehold.co/640x800/c1693f/faf8f5?text=Product+Demo',
  },
];

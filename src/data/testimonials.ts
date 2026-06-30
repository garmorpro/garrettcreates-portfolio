export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * Placeholder testimonials. Swap in real client quotes as they come in —
 * structure stays the same, just replace quote/name/role.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'The content felt completely native to the platform — our audience had no idea it was sponsored until the CTA. Engagement was some of the best we\'ve seen.',
    name: 'Marketing Lead',
    role: 'Smart Home Brand',
  },
  {
    quote:
      'Garrett understood our app in a way most creators don\'t. The demo videos made onboarding feel effortless, which is exactly what we needed.',
    name: 'Growth Manager',
    role: 'App Startup',
  },
  {
    quote:
      'Fast turnaround, easy communication, and the content actually performed. We\'ve already booked a second round.',
    name: 'Brand Partnerships',
    role: 'Home Goods Company',
  },
];

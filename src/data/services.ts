export interface Service {
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: 'UGC Videos',
    description: 'Authentic, scroll-stopping content shot to feel native to the platform it is posted on.',
    features: ['TikTok & Reels', 'Raw + edited footage', 'Hook-first scripting'],
  },
  {
    title: 'App & Tech Demos',
    description: 'Walkthroughs that make complex products feel simple, fast, and worth downloading.',
    features: ['Screen recording', 'Feature highlights', 'Problem → solution framing'],
  },
  {
    title: 'Home & Lifestyle Content',
    description: 'Real-life moments that show a product doing what it does best, no studio required.',
    features: ['In-home filming', 'Routine-style content', 'Before & after framing'],
  },
  {
    title: 'Unboxing & Product Demos',
    description: 'First-impression content built to drive curiosity and purchase intent.',
    features: ['Unboxing reactions', 'Feature call-outs', 'Multiple angles & takes'],
  },
  {
    title: 'Voiceovers & Script Reads',
    description: 'Clean, natural voice work for ads, explainers, or your own edited content.',
    features: ['Conversational delivery', 'Multiple takes', 'Fast turnaround'],
  },
  {
    title: 'Monthly Content Packages',
    description: 'Ongoing content production for brands who need a steady pipeline, not a one-off.',
    features: ['Recurring deliverables', 'Content calendar', 'Priority booking'],
  },
];

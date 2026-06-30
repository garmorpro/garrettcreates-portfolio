export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Reach Out',
    description:
      'Send your brief, product details, or just a general idea of what you need. I reply within 24 hours.',
  },
  {
    number: '02',
    title: 'Align on the Brief',
    description:
      'We lock in scope, deliverables, timeline, and any key talking points before anything is filmed.',
  },
  {
    number: '03',
    title: 'Shoot & Edit',
    description:
      'I film and edit the content, keeping you updated if anything needs your input along the way.',
  },
  {
    number: '04',
    title: 'Deliver & Post',
    description:
      'You receive final files ready to post or run as ads — raw footage included if needed for your team.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What types of brands do you work with?',
    answer:
      'Mainly tech, apps, smart home, and home/lifestyle brands — but I\'m open to other categories if the product fits a UGC-style approach.',
  },
  {
    question: 'Do you ship products to you, or do we provide them?',
    answer:
      'For physical products, you\'ll ship the item to me. For apps or software, I just need access/credentials to film a walkthrough.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most projects go from brief to delivered content within 1–2 weeks, depending on shipping time and revision rounds.',
  },
  {
    question: 'Do you provide raw, unedited footage?',
    answer:
      'Yes — raw footage is available on request, which is useful if your team wants to repurpose clips for ads or other formats.',
  },
  {
    question: 'Can you run the content as a paid ad?',
    answer:
      'I can film with whitelisting/Spark Ads usage rights in mind, or hand off raw + edited files for your media buying team to run.',
  },
  {
    question: 'What if I need ongoing content, not just one video?',
    answer:
      'That\'s what the Monthly Content Packages are for — a steady pipeline of content with priority booking on my calendar.',
  },
];

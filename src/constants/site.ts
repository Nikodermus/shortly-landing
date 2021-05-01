import Card from '../types/Card.d';

export const LOCALSTORAGE_KEY = 'shortly';
export const MAX_LINKS = 3;

export const CARDS: Card[] = [
  {
    title: 'Brand Recognition',
    content:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: 'brand-recognition',
  },
  {
    title: 'Detailed Records',
    content:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    image: 'detailed-records',
  },
  {
    title: 'Fully Customizable',
    content:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement',
    image: 'fully-customizable',
  },
];

export const SITE_MAP = [
  {
    title: 'Features',
    items: [
      {
        name: 'Link Shortening',
        path: '#',
      },
      {
        name: 'Branded Links',
        path: '#',
      },
      {
        name: 'Analytics',
        path: '#',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        name: 'Blog',
        path: '#',
      },
      {
        name: 'Developers',
        path: '#',
      },
      {
        name: 'Support',
        path: '#',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        name: 'About',
        path: '#',
      },
      {
        name: 'Our Team',
        path: '#',
      },
      {
        name: 'Careers',
        path: '#',
      },
      {
        name: 'Contact',
        path: '#',
      },
    ],
  },
];

export const SOCIAL_MEDIA = [
  {
    name: 'Facebook',
    icon: 'facebook',
    url: 'https://facebook.com',
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: 'https://twitter.com',
  },
  {
    name: 'Pinterest',
    icon: 'pinterest',
    url: 'https://pinterest.com',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com',
  },
];

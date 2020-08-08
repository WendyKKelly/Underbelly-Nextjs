import serviceIcon1 from '../../assets/image/agencyDigital/services/1.png';
import serviceIcon2 from '../../assets/image/agencyDigital/services/2.png';
import serviceIcon3 from '../../assets/image/agencyDigital/services/3.png';
import serviceIcon4 from '../../assets/image/agencyDigital/services/4.png';
import serviceIcon5 from '../../assets/image/agencyDigital/services/5.png';
import serviceIcon6 from '../../assets/image/agencyDigital/services/6.png';
import support1 from '../../assets/image/agencyDigital/support1.png';
import support2 from '../../assets/image/agencyDigital/support2.png';
import news1 from '../../assets/image/agencyDigital/news/1.png';
import news2 from '../../assets/image/agencyDigital/news/2.png';
import news3 from '../../assets/image/agencyDigital/news/3.png';
import news4 from '../../assets/image/agencyDigital/news/4.png';
import BlogImage1 from '../../assets/image/agencyDigital/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agencyDigital/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agencyDigital/blog/blog-img3.png';


export const data = {
  navItems: [
    {
      label: 'Home',
      path: '#home',
      offset: '70',
    },
    {
      label: '',
      path: '#',
      offset: '70',
    },
    {
      label: '',
      path: '#',
      offset: '70',
    },
    {
      label: 'Grow',
      path: '#service',
      offset: '70',
    },
    {
      label: 'Media',
      path: '#blog',
      offset: '70',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Train for Joy',
      thumbnail_url: BlogImage1,
      date: 'March 13, 2020',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'First Aid for Grief',
      thumbnail_url: BlogImage2,
      date: 'April 8, 2020',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Provocation: How to Use it for Good',
      thumbnail_url: BlogImage3,
      date: 'January 4, 2020',
      postLink: '#3',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-pencil-case',
      title: 'Journaling',
      description:
        'There are so many ways to do this exercise. Old school, audio, video, find your best way to a daily journaling practice.',
    },
    {
      id: 2,
      icon: 'flaticon-creative',
      title: 'Inquiry',
      description:
        'Take some time each day to check in with yourself.',
    },
    {
      id: 3,
      icon: 'flaticon-magnifying-glass',
      title: 'Quests',
      description:
        'This is my preferred term for daily exercises to challenge yourself to continue your story: become a stronger, more flexible, more emotionally fit hero of your story.',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Self Care',
      description:
        'This looks different for everyone. Take time, starting today, to build out your own self care kit, so when the time comes that you need a little self care first aid, you are ready.',
    },
    {
      id: 5,
      icon: 'flaticon-hourglass',
      title: 'Meditation and Prayer',
      description:
        'There are many ways to approach meditation and prayer. Take time to find your own practice.',
    },
    {
      id: 6,
      icon: 'flaticon-group',
      title: 'Therapy',
      description:
        'No one does this alone. Every hero needs a Guide. Find yours and begin your practice.',
    },
  ],
  workHardList: [
    { id: 1, title: 'OCEAN Big 5 ' },
    { id: 2, title: 'Enneagram Assessment' },
    { id: 3, title: 'Jungian Archetypes' },
    { id: 4, title: '16 Personalities' },
  ],
  pricing: [
    {
      id: 1,
      package_name: 'Starter Pack',
      price: '18.99',
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: 'Premium Pack',
      price: '29.99',
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: 'Custom Pack',
      price: '23.99',
      trial_day: 30,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 4,
      package_name: 'Ultimate Pack',
      price: '35.99',
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: true,
        },
      ],
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  services: [
    {
      id: 1,
      icon: serviceIcon1,
      title: '10 Wild and precious things',
      desc:
        'A free weekly newsletter every Monday morning to start your week off right.',
      link: '#',
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: 'Stories from my underbelly',
      desc:
        'An every so often blog hosted on Medium.',
      link: '#',
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: 'Wild and precious conversations',
      desc:
        'A podcast every Thursday with guests who speak freely with me on topics related to your emotional health.',
      link: 'https://wildprecious.thinkific.com/',
    },
    {
      id: 4,
      icon: serviceIcon4,
      title: 'Journal',
      desc:
        'A 365 day journal to take you through a year of emotional growth. Pay-as-you-will',
      link: 'https://wildprecious.thinkific.com/',
    },
    {
      id: 5,
      icon: serviceIcon5,
      title: 'Life Rules',
      desc:
        'A guided template to take you through the process of writing your own life rules. Pay-as-you-will',
      link: 'https://wildprecious.thinkific.com/',
    },
    {
      id: 6,
      icon: serviceIcon6,
      title: 'Discover Yourself',
      desc:
        'Take a course to discover and gain compassion for your inner critic.',
      link: 'https://wildprecious.thinkific.com/',
    },

  ],
  helps: [
    {
      id: 1,
      icon: support1,
      title: 'Psychology Today <Find a Therapist>',
      desc:
        'A great list of therapists you can serach for by location and other preferences.',
    },

  ],
  newsFeed: [
    {
      id: 1,
      image: news1,
      title: '',
      desc:
        'Curious about your emotional wellness? Assessments are a great way to learn more about yourself, what makes you tick, and how you can best take good care of your beautiful self.',
      link: '#check-in',
    },
    {
      id: 2,
      image: news2,
      title: '',
      desc: 'You can (and should) train your emotional self as much as you train your physcial body. If you take steps each day to get emotionally stronger and more flexible, when storms come, you will be ready',
      link: '#train',
    },
    {
      id: 3,
      image: news3,
      title: '',
      desc: 'Are you feeling pretty good but want to learn more about how your emotional self ticks? Start here to read, listen, and learn about how to care for your wild and precious self.',
      link: '#learn',
    },
    {
      id: 4,
      image: news4,
      title: '',
      desc: 'Everybody hurts sometimes. It happens to all of us. If you are suffering now, take needed next steps to care for yourself — Now.',
      link: '#sad',
    },
  ],
  footer: [
    {
      id: 1,
      title: 'Company',
      list: [
        {
          id: 1,
          title: 'About',
          link: '#',
        },
        {
          id: 2,
          title: 'Affiliate',
          link: '#',
        },
        {
          id: 3,
          title: 'Careers & Culture',
          link: '#',
        },
        {
          id: 4,
          title: 'Blog',
          link: '#',
        },
        {
          id: 5,
          title: 'Press',
          link: '#',
        },
      ],
    },
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Support Center',
          link: '#',
        },
        {
          id: 2,
          title: 'Customer Support',
          link: '#',
        },
        {
          id: 3,
          title: 'About Us',
          link: '#',
        },
        {
          id: 4,
          title: 'Copyright',
          link: '#',
        },
        {
          id: 5,
          title: 'Popular Campaign',
          link: '#',
        },
      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [
        {
          id: 1,
          title: 'Return Policy ',
          link: '#',
        },
        {
          id: 2,
          title: 'Privacy Policy',
          link: '#',
        },
        {
          id: 3,
          title: 'Terms & Conditions',
          link: '#',
        },
        {
          id: 4,
          title: 'Site Map',
          link: '#',
        },
        {
          id: 5,
          title: 'Store Hours',
          link: '#',
        },
      ],
    },
    {
      id: 4,
      title: 'My Account',
      list: [
        {
          id: 1,
          title: 'Press inquiries',
          link: '#',
        },
        {
          id: 2,
          title: 'Social media ',
          link: '#',
        },
        {
          id: 3,
          title: 'directories',
          link: '#',
        },
        {
          id: 4,
          title: 'Images & B-roll',
          link: '#',
        },
        {
          id: 5,
          title: 'Permissions',
          link: '#',
        },
      ],
    },
    {
      id: 5,
      title: 'Policy',
      list: [
        {
          id: 1,
          title: 'Application security',
          link: '#',
        },
        {
          id: 2,
          title: 'Software principles',
          link: '#',
        },
        {
          id: 3,
          title: 'Unwanted software policy',
          link: '#',
        },
        {
          id: 4,
          title: 'Responsible supply chain',
          link: '#',
        },
      ],
    },
  ],
  footerNav: [
    {
      id: 1,
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      title: 'About',
      link: '#about',
    },
    {
      id: 3,
      title: '',
      link: '#',
    },
    {
      id: 4,
      title: 'Support Our Mission',
      link: 'https://www.patreon.com/underbellyproject',
    },
    {
      id: 5,
      title: '',
      link: '#',
    },
  ],
};

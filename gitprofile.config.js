// gitprofile.config.js

const config = {
  github: {
    username: 'lexyerresta', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['lexyerresta'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'lexyerresta',
    twitter: 'lexyerresta',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'lexyerresta',
    dev: 'lexyerresta',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'lexyerresta.github.io',
    phone: '',
    email: 'errestlegends@gmail.com',
  },
  resume: {
    fileUrl:
      'https://pink-bunni-34.tiiny.site/Curriculum%20Vitae%20-%20Lexy%20Erresta-2024-01-10T00-08-36.231Z.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'PHP',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'Laravel',
    'Tailwind',
    'React.js',
    'Next.js',
    'MySQL',
    'Figma',
    'Git',
  ],
  experiences: [
    {
      company: 'Blessing Digital',
      position: 'Content Writer',
      from: 'July 2016',
      to: 'October 2016',
      companyLink: 'https://www.blessingdigital.com/',
    },
    {
      company: 'Badan Narkotika Nasional Provinsi Bali',
      position: 'Prevention and Community Empowerment',
      from: 'April 2022',
      to: 'July 2022',
      companyLink: 'https://bali.bnn.go.id/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  certifications: [
    {
      name: 'Alibaba Cloud Certification',
      body: 'Learning Cloud Applications',
      year: 'March 2023 to September 2025',
      link: 'https://xuecdn2.aliyunedu.net/img_b41e8c0796f99840a77227619869a41d.jpg'
    },
  ],
  education: [
    {
      institution: 'TI Bali Global Denpasar',
      degree: 'Software Engineering Program',
      from: '2015',
      to: '2018',
      link: 'https://smkti-baliglobal.sch.id/'
    },
    {
      institution: 'STIKOM Bali Institute Technology and Bussiness ',
      degree: 'Information Systems',
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'LexAnimeList',
      description:
        'The anime website that can see the latest anime update with rank, score, episode, and many more.',
      imageUrl: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
      link: 'https://lexanimelist.vercel.app',
    },
    {
      title: 'Responsive Website',
      description:
        'My first freelance project. The responsive web create with bootstrap 5, AOS and the swiper slider.',
      imageUrl: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg',
      link: 'https://bootstrap-website-sigma.vercel.app',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'lexyerresta', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/lexyerresta"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

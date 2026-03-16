export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Developing full-stack MERN applications from idea to deployment',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Resturant Website',
    des: 'A dynamic multi-page restaurant website developed using HTML, CSS, and JavaScript, featuring a responsive design and seamless navigation.',
    img: '/p3.png',
    iconLists: ['/html.png', '/css.png', '/js.png'],
    link: 'https://github.com/RubinaAkther/html-css-demo-restaurant-website',
  },
  {
    id: 2,
    title: 'WiseTutor – Educational Website',
    des: 'A responsive web platform built with HTML, CSS, Bootstrap and JavaScript to provide interactive learning resources.',
    img: '/p1.png',
    iconLists: ['/html.png', '/css.png', '/boostrap.png', '/js.png'],
    link: 'https://github.com/RubinaAkther/WiseTutor',
  },
  {
    id: 3,
    title: 'Agency AI - A modern, responsive agency website',
    des: 'Built with React, Vite, and TailwindCSS, featuring smooth animations and interactive components.',
    img: '/agency_ai.png',
    iconLists: ['/re.svg', '/tail.svg', '/FramerMotion.png'],
    link: 'https://github.com/RubinaAkther/Agency.AI',
  },
  {
    id: 4,
    title: 'Forever Ecommerce Project',
    des: 'Full Stack E-commerce Website using React JS, MongoDB, Express JS, Node JS, Stripe and Razorpay.',
    img: '/p4.png',
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/mongodb.png',
      '/express.png',
      '/node.png',
    ],
    link: 'https://github.com/RubinaAkther/Forever-Ecommerce-Project',
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Rubina was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rubina's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rubina is the ideal partner.",
//     name: 'Michael Johnson',
//     title: 'Director of AlphaStream Technologies',
//   },
//   {
//     quote:
//       "Collaborating with Rubina was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rubina's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rubina is the ideal partner.",
//     name: 'Sayma ',
//     title: 'Director of AlphaStream Technologies',
//   },
//   {
//     quote:
//       "Collaborating with Rubina was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rubina's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rubina is the ideal partner.",
//     name: 'Nafiz Rahman',
//     title: 'Director of AlphaStream Technologies',
//   },
//   {
//     quote:
//       "Collaborating with Rubina was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rubina's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rubina is the ideal partner.",
//     name: 'Shahajadi Akter',
//     title: 'Director of AlphaStream Technologies',
//   },
//   {
//     quote:
//       "Collaborating with Rubina was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rubina's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rubina is the ideal partner.",
//     name: 'M K Omar',
//     title: 'Director of AlphaStream Technologies',
//   },
// ];

// certificate
export const certificates = [
  {
    quote:
      'Achieved a marks score of 90% in modern web design focusing on HTML5, CSS3, and interactive elements.',
    name: 'Complete Web Design',
    title: 'eShikhon',
    img: '/eshikhon.jpg',
  },
  {
    quote:
      'Gained hands-on experience building scalable web applications and professional-grade backend architectures using the MERN stack.',
    name: 'MERN Stack Web Development',
    title: 'Interactive Cares',
    img: '/interactive.png',
  },
  {
    quote:
      'Successfully completed Reactive Accelerator course, mastering advanced JavaScript, React Hooks, and Next.js fundamentals.',
    name: 'Reactive Accelerator (Batch 3)',
    title: 'Learn with Sumit (LWS)',
    img: '/lwsC.png',
  },
  {
    quote:
      "Recognized for 'Extraordinary' performance during the Reactive Accelerator. Completed 8 small/medium projects and 1 large-scale project, mastering Server Components, API integration, and Internationalization.",
    name: 'Letter of Recommendation',
    title: 'Sumit Saha, Founder of Learn with Sumit',
    img: '/lwsR.png',
  },

  {
    quote:
      'Achieved a marks score of 90% in modern web design focusing on HTML5, CSS3, and interactive elements.',
    name: 'Complete Web Design',
    title: 'eShikhon',
    img: '/eshikhon.jpg',
  },
  {
    quote:
      'Gained hands-on experience building scalable web applications and professional-grade backend architectures using the MERN stack.',
    name: 'MERN Stack Web Development',
    title: 'Interactive Cares',
    img: '/interactive.png',
  },
  {
    quote:
      'Successfully completed Reactive Accelerator course, mastering advanced JavaScript, React Hooks, and Next.js fundamentals.',
    name: 'Reactive Accelerator (Batch 3)',
    title: 'Learn with Sumit (LWS)',
    img: '/lwsC.png',
  },
  {
    quote:
      "Recognized for 'Extraordinary' performance during the Reactive Accelerator. Completed 8 small/medium projects and 1 large-scale project, mastering Server Components, API integration, and Internationalization.",
    name: 'Letter of Recommendation',
    title: 'Sumit Saha, Founder of Learn with Sumit',
    img: '/lwsR.png',
  },
];
export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Full-Stack Web Development Training',
    desc: 'Completed focused MERN stack training, building real-world projects and mastering React, Node.js, and MongoDB.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Open-Source Contributions',
    desc: 'Contributed to GitHub projects, fixing bugs and adding features using React.js and Node.js.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Personal Projects',
    desc: 'Built multiple web applications as practice, improving full-stack development skills with MERN.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Portfolio & Showcase Projects',
    desc: 'Created a personal portfolio to demonstrate MERN projects, skills, and professional growth.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];

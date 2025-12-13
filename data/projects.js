// College Projects
export const collegeProjects = [
    {
        id: 'college-1',
        title: 'AR Based Educational Books',
        period: 'Jul 2020 - Dec 2020',
        type: 'Academic Project',
        institution: 'Shah And Anchor Kutchhi Engineering College',
        category: 'AR/VR',
        description: 'AR based educational application that transforms complex diagrams into interactive 3D models, making learning more accessible and engaging in the post-Covid educational landscape.',
        technologies: ['Augmented Reality', 'Mobile Development', '3D Modeling', 'iOS/Android'],
        icon: '🥽'
    },
    {
        id: 'college-2',
        title: 'Hospital Appointment ChatBot',
        period: 'Jul 2020 - Dec 2020',
        type: 'Academic Project',
        institution: 'Shah And Anchor Kutchhi Engineering College',
        category: 'AI/ML',
        description: 'Intelligent chatbot using Dialogflow to automate hospital appointment scheduling, freeing up staff for more valuable tasks.',
        technologies: ['Dialogflow', 'Flutter', 'Mobile App', 'Natural Language Processing'],
        icon: '🤖'
    },
    {
        id: 'college-3',
        title: 'Criminal Portrait Building App',
        period: 'Mar 2020 - Aug 2020',
        type: 'Academic Project',
        institution: 'Shah And Anchor Kutchhi Engineering College',
        category: 'AI/ML',
        description: 'App-based portrait building software for law enforcement, using facial feature extraction and classification to create suspect portraits.',
        technologies: ['Computer Vision', 'Feature Extraction', 'Image Processing', 'Mobile App'],
        icon: '🔍'
    },
    {
        id: 'college-4',
        title: 'COVID-19 Tracking Dashboard',
        period: 'Dec 2019 - Mar 2020',
        type: 'Academic Project',
        institution: 'Shah And Anchor Kutchhi Engineering College',
        category: 'Data Science',
        description: 'Interactive COVID-19 tracking dashboard using Microsoft Power BI with real-time data visualization and forecasting.',
        technologies: ['Microsoft Power BI', 'Data Cleaning', 'Data Visualization', 'Kaggle'],
        icon: '📊'
    },
    {
        id: 'college-5',
        title: 'IoT Smart Mirror',
        period: 'Nov 2019',
        type: 'Academic Project',
        institution: 'Shah And Anchor Kutchhi Engineering College',
        category: 'IoT',
        description: 'IoT-based smart mirror using Raspberry Pi with weather updates, multimedia support, and voice assistant integration (Alexa).',
        technologies: ['Raspberry Pi', 'IoT', 'Alexa', 'Wi-Fi', 'API Integration'],
        icon: '🪞'
    },
    {
        id: 'college-6',
        title: 'College Website Development',
        period: 'Mar 2017 - Mar 2018',
        type: 'Academic Project',
        institution: 'VPM Polytechnic Thane',
        category: 'Web Development',
        description: 'Full-stack college website with intuitive UI for students and visitors to access events and news.',
        technologies: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Full-Stack'],
        icon: '🌐'
    },
    {
        id: 'college-7',
        title: 'E-Library Platform',
        period: 'Jan 2017',
        type: 'Academic Project',
        institution: 'VPM Polytechnic Thane',
        category: 'Web Development',
        description: 'Digital library platform with Q&A forums, online/offline reading, and social sharing features.',
        technologies: ['HTML5', 'Web Development', 'Database', 'Online Server'],
        icon: '📚'
    }
];

// Professional Projects (from work experience)
export const professionalProjects = [
    {
        id: 'pro-1',
        title: 'TEBillion CRM Mobile App',
        company: 'TEBillion',
        period: 'Senior Software Engineer',
        category: 'Mobile Development',
        description: 'Led end-to-end development of TEBillion CRM Mobile App (iOS & Android), empowering global sales teams with field-ready tools.',
        technologies: ['React Native', 'Figma', 'Axios', 'React Query', 'AI Integration', 'iOS', 'Android', 'CRM'],
        icon: '💼'
    },
    {
        id: 'pro-2',
        title: 'Otsy Travel & Social Platform',
        company: 'NextGen Invent',
        period: 'Full-time',
        category: 'Mobile Development',
        description: 'Built and optimized React Native app for travel & social media platform, spotlighted at TechCrunch Disrupt.',
        technologies: ['React Native', 'GraphQL', 'Payments', 'Authentication', 'UI/UX', 'API Integration'],
        icon: '✈️'
    },
    {
        id: 'pro-3',
        title: 'Cardware Collaboration Platform',
        company: 'NextGen Invent (CatalystXL)',
        period: 'Full-time',
        category: 'Mobile Development',
        description: 'Engineered React Native collaboration platform with multi-app switching, map integrations, and dynamic APIs.',
        technologies: ['React Native', 'Native Base', 'Maps', 'Dynamic APIs', 'Custom Styling'],
        icon: '🤝'
    },
    {
        id: 'pro-4',
        title: 'Rhino Tool House Dynamic UI System',
        company: 'NextGen Invent',
        period: 'Full-time',
        category: 'Web Development',
        description: 'Developed Next.js dynamic component rendering system generating real-time UI from backend JSON + GraphQL configurations.',
        technologies: ['Next.js', 'GraphQL', 'JSON', 'Rule Engine', 'Dynamic Rendering'],
        icon: '🔧'
    },
    {
        id: 'pro-5',
        title: 'OutdoorGoats Mobile App',
        company: 'OutdoorGoats',
        period: 'Full-time',
        category: 'Mobile Development',
        description: 'Led development of OutdoorGoats mobile application (iOS & Android) - an adventure-sport ecosystem enabling users to explore, connect, and shop.',
        technologies: ['React Native', 'GraphQL', 'REST API', 'Figma', 'iOS', 'Android', 'E-commerce', 'Offline Sync'],
        icon: '🏔️'
    }
];

// Combined export
export const allProjects = {
    college: collegeProjects,
    professional: professionalProjects
};

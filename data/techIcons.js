export const TECH_STACK = {
    "Frontend": {
        color: "from-blue-500 to-cyan-500",
        icon: "⚛️",
        technologies: {
            "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            "React Hooks": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        }
    },
    "State Management": {
        color: "from-purple-500 to-pink-500",
        icon: "🔄",
        technologies: {
            "MobX": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mobx.svg",
            "React Query": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reactquery.svg"
        }
    },
    "API & Data": {
        color: "from-green-500 to-emerald-500",
        icon: "🔌",
        technologies: {
            "Apollo GraphQL": "https://raw.githubusercontent.com/apollographql/artwork/main/apollo.svg",
            "Axios": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/axios.svg",
            "REST APIs": "https://cdn-icons-png.flaticon.com/512/136/136443.png",
            "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
        }
    },
    "Backend & Database": {
        color: "from-orange-500 to-red-500",
        icon: "💾",
        technologies: {
            "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            "Cloud Firestore": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            "Realm": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/realm.svg",
            "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        }
    },
    "UI & Design": {
        color: "from-pink-500 to-rose-500",
        icon: "🎨",
        technologies: {
            "NativeBase": "https://seeklogo.com/images/N/nativebase-logo-1E7F3B5B83-seeklogo.com.png",
            "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        }
    },
    "Other": {
        color: "from-indigo-500 to-purple-500",
        icon: "🛠️",
        technologies: {
            "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
            "AR / CV": "https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
        }
    }
};

// Backward compatibility
export const TECH_ICONS = Object.values(TECH_STACK).reduce((acc, category) => {
    return { ...acc, ...category.technologies };
}, {});

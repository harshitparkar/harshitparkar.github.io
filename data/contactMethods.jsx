import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export const contactMethods = [
    {
        type: 'Email',
        value: 'harshitparkar.connect@gmail.com',
        href: 'mailto:harshitparkar.connect@gmail.com',
        icon: Mail
    },
    {
        type: 'Phone',
        value: '+91-9702346677',
        href: 'tel:+919702346677',
        icon: Phone
    },
    {
        type: 'LinkedIn',
        value: 'harshitparkar',
        href: 'https://www.linkedin.com/in/harshitparkar/',
        target: '_blank',
        rel: 'noopener noreferrer',
        icon: Linkedin
    }
];

import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart AI Interviews',
        desc: 'Automated interviews with real time monitoring and intelligent evaluation.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Live Coding & Execution',
        desc: 'Interactive coding with instant execution and test case validation.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video & Performance Insights',
        desc: 'Real-time interaction with detailed AI generated performance reports.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Basic',
        price: '$49',
        desc: 'Best for individuals and small teams starting with technical hiring.',
        credits: 'One-time',
        features: [
            'AI-powered interview sessions',
            'Basic coding environment',
            'Automated test case execution',
            'Interview recording',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Professional',
        price: '$149',
        desc: 'Ideal for growing teams and active recruiters.',
        credits: 'Monthly',
        features: [
            'Everything in Basic',
            'Advanced coding environment',
            'Live video, chat & screen sharing',
            'AI performance analysis & feedback',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: '$3499',
        desc: 'For organizations with large-scale hiring needs.',
        credits: 'Custom',
        features: [
            'Everything in Professional',
            'Unlimited interview sessions',
            'Advanced analytics & reports',
            'Custom integrations',
            'Dedicated account manager'
        ]
    }
];

export const faqData = [
    {
        question: 'How does CodeArena conduct AI powered interviews?',
        answer: 'CodeArena uses an AI interviewer to ask technical questions, monitor responses, and evaluate candidate performance in real-time through coding, video, and interaction data.'
    },
    {
        question: 'Can candidates write and run code during interviews?',
        answer: 'Yes, candidates can solve coding problems in a real-time editor with instant code execution and automated test case validation.'
    },
    {
        question: 'Is the interview process secure and unbiased?',
        answer: 'Yes, CodeArena ensures a secure environment with monitored sessions and AI-driven evaluation to provide fair and unbiased assessments.'
    },
    {
        question: 'What kind of feedback does the platform provide?',
        answer: 'After each interview, CodeArena generates detailed feedback based on coding accuracy, problem-solving skills, and overall interaction to help make better hiring decisions.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];
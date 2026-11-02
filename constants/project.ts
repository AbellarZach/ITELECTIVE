export type ProjectModalDetails = {
    eyebrow?: string;
    subtitle?: string;
    previewImage?: string;
    liveUrl?: string;
    aboutTitle?: string;
    aboutDescription?: string;
    features?: string[];
    techTags?: string[];
    role?: string;
};

export type ProjectItem = {
    title: string;
    category?: string;
    description: string;
    tags: string[];
    image: string;
    links: {
        demo: string;
        github: string;
    };
    modalDetails?: ProjectModalDetails;
};

export const PROJECTS: ProjectItem[] = [
    {
        title: "OrganBee Honey",
        category: "Woo-commerce",
        description: "An organic honey storefront bringing product discovery, promotional bundles, flash sale deals, customer testimonials, and an intuitive checkout flow into one responsive e-commerce experience.",
        tags: ["WooCommerce", "Elementor", "WooPayments"],
        image: "/organ.png",
        links: {
            demo: "https://organbee.site.je/",
            github: "https://cordova-public-college.rf.gd/",
        },
        modalDetails: {
            eyebrow: "E-commerce & Health / Wellness",
            subtitle: "Website design & WooCommerce development",
            previewImage: "/Home - OrganBee.png",
            liveUrl: "https://organbee.site.je/",
            aboutTitle: "About the project",
            aboutDescription: "An organic honey storefront bringing product discovery, promotional bundles, flash sale deals, customer testimonials, and an intuitive checkout flow into one responsive e-commerce experience.",
            role: "Website design & development",
            features: [
                "Full e-commerce store with product categories (Orange Blossom, Sunflower, Raw Honey)",
                "Flash sale promotions, discount countdowns, and bundle offers",
                "Streamlined checkout flow powered by WooCommerce & WooPayments",
                "100% mobile-responsive shopping layout across all devices",
                "Client testimonials and educational honey news & blog integration"
            ],
            techTags: ["WooCommerce", "WordPress", "Elementor", "WooPayments", "E-commerce", "Product Catalogue", "UI/UX Design"]
        }
    },
    {
        title: "Premier Real Estate",
        category: "Real Estate",
        description: "An modern industry-focused website designed to showcase construction and industrial services. It features company information, services, projects, team members, client testimonials, and a contact section, providing visitors with a professional and user-friendly experience.",
        tags: ["Elementor", "Element Pack Lite", "Elementor Pro"],
        image: "/mods.png",
        links: {
            demo: "https://premier.free.je",
            github: "https://premier.free.je",
        },
        modalDetails: {
            eyebrow: "Industry & Real Estate",
            subtitle: "Website design & WordPress development",
            previewImage: "/modified_image.png",
            liveUrl: "https://premier.free.je",
            aboutTitle: "About the project",
            aboutDescription: "An industry-focused website designed to showcase construction, engineering, and industrial services. Features company history, active projects, team rosters, client reviews, and interactive contact forms.",
            role: "Website design & development",
            features: [
                "Comprehensive construction services & project portfolio",
                "Interactive team profiles and client testimonial sections",
                "High-performance responsive design built with Elementor Pro",
                "Lead generation contact and quote request forms"
            ],
            techTags: ["WordPress", "Elementor Pro", "Element Pack Lite", "Real Estate", "Responsive Design"]
        }
    },
    {
        title: "ShoeFit",
        category: "Woo-commerce",
        description: "A modern footwear and lifestyle sneaker e-commerce website designed to provide a smooth, engaging shopping journey with intuitive product browsing, limited-time flash deals, customer testimonials, and an intuitive checkout flow.",
        tags: ["Elementor", "Woo-commerce", "Woostify"],
        image: "/ShoeFits.png",
        links: {
            demo: "https://shoefit.site.je/",
            github: "https://shoefit.site.je/",
        },
        modalDetails: {
            eyebrow: "E-commerce & Footwear",
            subtitle: "Website design & WooCommerce development",
            previewImage: "/ShoeFits.png",
            liveUrl: "https://shoefit.site.je/",
            aboutTitle: "About the project",
            aboutDescription: "A modern footwear and lifestyle sneaker e-commerce website designed to provide a smooth, engaging shopping journey with intuitive product browsing, limited-time flash deals, customer testimonials, and an intuitive checkout flow.",
            role: "Website design & WooCommerce development",
            features: [
                "Full e-commerce store with product categories (Men, Women, Kids, Lifestyle)",
                "Limited-time discount deals, promotional sale badges, and new arrival showcases",
                "Curated brand spotlights including Nike, Adidas, Jordan, Vans, and Fila",
                "Fast, mobile-responsive shopping layout built with Woostify and WooCommerce",
                "Customer testimonials and interactive shopping cart with streamlined checkout"
            ],
            techTags: ["WooCommerce", "WordPress", "Woostify", "Elementor", "E-commerce", "Responsive Design", "UI/UX Design"]
        }
    },
    {
        title: "Project Delta",
        category: "Websites",
        description: "A portfolio website for a creative agency, showcasing their work with smooth animations.",
        tags: ["Gatsby", "GraphQL", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        links: {
            demo: "https://example.com",
            github: "https://github.com",
        },
    },
    {
        title: "Project Epsilon",
        category: "Websites",
        description: "A personal blog platform with a clean design and support for markdown content.",
        tags: ["Next.js", "Markdown", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        links: {
            demo: "https://example.com",
            github: "https://github.com",
        },
    },
];
import ForeverDP from '../data/project-images/FOREVER-cover-full-page.png'
import ForeverCover from '../data/project-images/FOREVER-cover.png'
import ForeverScreenshot1 from '../data/project-images/FOREVER-Screenshot-1.png'
import ForeverScreenshot2 from '../data/project-images/FOREVER-Screenshot-2.png'
import ForeverScreenshot3 from '../data/project-images/FOREVER-Screenshot-3.png'
import StudentPortalCover from '../data/project-images/Student-portal-cover.png'
import StudentProtalScreenshot1 from '../data/project-images/Student-Portal-screenshot-1.png'
import StudentProtalScreenshot2 from '../data/project-images/Student-Portal-screenshot-2.png'
import StudentProtalScreenshot3 from '../data/project-images/Student-Portal-screenshot-3.png'

export const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Full-stack",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        image: ForeverDP,
        coverImage: ForeverCover,
        screenshots: [
            ForeverScreenshot1, ForeverScreenshot2, ForeverScreenshot3
        ],
        description:
            "A complete MERN e-commerce app featuring authentication, cart, payments, and admin dashboard.",
        code: "https://github.com/fmfuad0/FOREVER_e_commerce_shop",
        live: "https://forever-e-com-store.netlify.app/",
    },
    {
        id: 2,
        title: "Student Management Portal",
        category: "Frontend",
        tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
        image: StudentPortalCover,
        coverImage: StudentPortalCover,
        screenshots: [
            StudentProtalScreenshot1, StudentProtalScreenshot2, StudentProtalScreenshot3
        ],
        description:
            "A modern personal portfolio with animations, theme toggle, and smooth UI interactions.",
        code: "https://github.com/fmfuad0/student-management-portal",
        live: "https://stu-management-portal.netlify.app/",
    },
    {
        id: 3,
        title: "Youtube UI Clone (*Under Development*)",
        category: "Backend",
        tech: ["Node.js", "Express", "JWT", "MongoDB"],
        image: "/images/api-dashboard.jpg",
        screenshots: [
            "/images/api1.jpg",
            "/images/api2.jpg",
        ],
        description:
            "A backend dashboard for API management with JWT-based authentication and role access.",
        live: "#",
        code: "#",
    },
];

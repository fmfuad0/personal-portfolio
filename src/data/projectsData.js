import foreverCoverFullPage from '../data/project-images/FOREVER-cover-full-page.png'
import foreverCover from '../data/project-images/FOREVER-cover.png'
import foreverScreenshot1 from '../data/project-images/FOREVER-Screenshot-1.png'
import foreverScreenshot2 from '../data/project-images/FOREVER-Screenshot-2.png'
import foreverScreenshot3 from '../data/project-images/FOREVER-Screenshot-3.png'
import studentPortalCover from '../data/project-images/Student-Portal-cover.png'
import studentPortalScreenshot1 from '../data/project-images/Student-Portal-screenshot-1.png'
import studentPortalScreenshot2 from '../data/project-images/Student-Portal-screenshot-2.png'
import studentPortalScreenshot3 from '../data/project-images/Student-Portal-screenshot-3.png'
import youtubeCloneCoverFullPage from '../data/project-images/youtube-clone-cover-full-page.png'
import youtubeCloneCover from '../data/project-images/youtube-clone-cover.png'
import youtubeCloneScreenshot1 from '../data/project-images/youtube-clone-screenshot-1.png'
import youtubeCloneScreenshot2 from '../data/project-images/youtube-clone-screenshot-2.png'
import youtubeCloneScreenshot3 from '../data/project-images/youtube-clone-screenshot-3.png'
import youtubeCloneScreenshot4 from '../data/project-images/youtube-clone-screenshot-4.png'
import classyShopCoverFullPage from '../data/project-images/Classyshop-cover-full-page.png'
import classyShopCover from '../data/project-images/Classyshop-cover.png'
import classyShopScreenshot1 from '../data/project-images/Classyshop-Screenshot-1.png'
import classyShopScreenshot2 from '../data/project-images/Classyshop-Screenshot-2.png'
import classyShopScreenshot3 from '../data/project-images/Classyshop-Screenshot-3.png'
import classyShopScreenshot4 from '../data/project-images/Classyshop-Screenshot-4.png'
import classyShopScreenshot5 from '../data/project-images/Classyshop-Screenshot-5.png'


export const projectsData = [
    {
        id: 1,
        title: "FOREVER - Cloathing brand website",
        category: ["Frontend"],
        tech: ["React", "Node.js", "MongoDB", "Express"],
        image: foreverCoverFullPage,
        coverImage: foreverCover,
        screenshots: [
            foreverScreenshot1, foreverScreenshot2, foreverScreenshot3
        ],
        description:
            "A complete MERN e-commerce app featuring authentication, cart, payments, and admin dashboard.",
        code: "https://github.com/fmfuad0/FOREVER_e_commerce_shop",
        live: "https://forever-e-com-store.netlify.app/",
    },
    {
        id: 2,
        title: "Student Management Portal",
        category: ["Full-stack", "Backend", "Frontend"],
        tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
        image: studentPortalCover,
        coverImage: studentPortalCover,
        screenshots: [
            studentPortalScreenshot1, studentPortalScreenshot2, studentPortalScreenshot3
        ],
        description:
            "A student management portal that displays student results, bills and other information individually.Also handles authority announcement, course and section registration and submitting student application related operations.",
        code: "https://github.com/fmfuad0/student-management-portal",
        live: "https://stu-management-portal.netlify.app/",
    },
    {
        id: 3,
        title: "CLASSYSHOP - E-commerce website",
        category: ["Frontend"],
        tech: ["React.js", "TailwindCss", "JWT", "React-auth@google"],
        image: classyShopCoverFullPage,
        coverImage: classyShopCover,
        screenshots: [
            classyShopScreenshot1, classyShopScreenshot2, classyShopScreenshot3, classyShopScreenshot4, classyShopScreenshot5, 
        ],
        description:
            "A complete e-commerce-website frontend with excellent features.Explore products accross categories, place and track orders, login with Google and many more",
        live: "https://classyshop-e-com-store.netlify.app",
        code: "https://github.com/fmfuad0/e-commerce-website",
    },
    {
        id: 4,
        title: "Youtube UI Clone (*Under Development*)",
        category: ["Full-stack", "Backend", "Frontend"],
        tech: ["Node.js", "Express", "JWT", "MongoDB"],
        image: youtubeCloneCoverFullPage,
        coverImage: youtubeCloneCover,
        screenshots: [
            youtubeCloneScreenshot1, youtubeCloneScreenshot2, youtubeCloneScreenshot3, youtubeCloneScreenshot4
        ],
        description:
            "A backend dashboard for API management with JWT-based authentication and role access.",
        live: "",
        code: "https://github.com/fmfuad0/YouTube-clone",
    },
];

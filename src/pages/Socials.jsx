// src/pages/Social.jsx
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const socials = [
    {
        name: "GitHub",
        icon: <GitHubIcon fontSize="large" />,
        color: "group-hover:text-green-400",
        link: "https://github.com/yourusername",
    },
    {
        name: "LinkedIn",
        icon: <LinkedInIcon fontSize="large" />,
        color: "group-hover:text-blue-500",
        link: "https://linkedin.com/in/yourusername",
    },
    {
        name: "Facebook",
        icon: <FacebookIcon fontSize="large" />,
        color: "group-hover:text-blue-400",
        link: "https://facebook.com/yourusername",
    },
    {
        name: "Twitter",
        icon: <TwitterIcon fontSize="large" />,
        color: "group-hover:text-sky-400",
        link: "https://twitter.com/yourusername",
    },
    {
        name: "Instagram",
        icon: <InstagramIcon fontSize="large" />,
        color: "group-hover:text-pink-500",
        link: "https://instagram.com/yourusername",
    },
];

const Social = () => {
    return (
        <section className="flex flex-col items-center justify-center text-white px-6 py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-accent)] mb-12">
                Let’s Connect
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {socials.map((social, i) => (
                    <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center w-32 h-32  border border-white/10 rounded-2xl backdrop-blur-md  hover:shadow-[0_0_800px_var(--color-accent)] transform transition-all duration-300 hover:scale-105"
                    >
                        <div className={`text-gray-300 mb-2 ${social.color}`}>
                            {social.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-all duration-300">
                            {social.name}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Social;

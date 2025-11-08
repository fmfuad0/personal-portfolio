import React, { useEffect, useState } from "react";
import pexels1 from "../assets/pexels1.jpg";
import pexels2 from "../assets/pexels2.jpg";
import pexels3 from "../assets/pexels3.jpg";
// import avatar from "../assets/avatar1.png";
import avatar from "../assets/avatar5.jpg";
import Tooltip from "@mui/material/Tooltip";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const TypewriterParagraph = ({
                                 typingSpeed = 90,
                                 pauseTime = 1500,
                                 className ,
                             }) => {
    const texts = ["Frontend Developer", "Backend Developer", "Competitive Programmer"];
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!texts.length) return;

        if (subIndex === texts[index].length + 1 && !deleting) {
            setTimeout(() => setDeleting(true), pauseTime);
            return;
        }

        if (subIndex === 0 && deleting) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
            setDisplayedText(texts[index].substring(0, subIndex));
        }, deleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);

    return (
        <p className={`typewriter ${className}`}>
            {displayedText}
            <span className="cursor"> </span>
        </p>
    );
};


// ==================== PROFILE CARD ====================
const ProfileCard = ({setOpen, setAvatar}) => {
    const [index, setIndex] = useState(0);
    const images = [pexels1, pexels2, pexels3];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        { title: "Github", icon: "fa-github" },
        { title: "Google", icon: "fa-google" },
        { title: "LinkedIn", icon: "fa-linkedin" },
        { title: "Facebook", icon: "fa-facebook" },
        { title: "X", icon: "fa-twitter" },
        { title: "WhatsApp", icon: "fa-whatsapp" },
    ];

    return (
        <div className="profile-card relative top-50 -translate-y-30 ml-2 left-0 w-[480px] h-[650px] rounded-lg overflow-hidden">
            {/* Background Image */}
            <div
                className="w-full h-[60%] bg-no-repeat bg-cover smooth-transition"
                style={{ backgroundImage: `url(${images[index]})` }}
            />

            {/* Profile Content */}
            <div className="profile-details relative bg-[var(--color-bg)] w-full text-center">
                {/* Avatar */}
                <div className="w-36 h-36 rounded-full absolute z-10 -top-[100px] left-[50%] -translate-x-[50%] -translate-y-15 overflow-hidden border-4 border-[var(--color-accent)] shadow-lg cursor-pointer" onClick={()=> {
                    setOpen(true)
                    setAvatar(avatar)
                }}>
                    <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3 translate-y-[20%]">
                    <strong className="text-white text-2xl" style={{ fontFamily: "monospace" }}>
                        Md. Fartin Mahtadi Fuad
                    </strong>

                    <TypewriterParagraph className="font-semibold tracking-widest text-[var(--color-accent)]" />

                    {/* Social Icons */}
                    <div className="h-15 w-full flex justify-center gap-5 items-center">
                        {socialLinks.map(({ title, icon }) => (
                            <Tooltip key={title} title={title} placement="top" arrow>
                                <i
                                    className={`fa-brands ${icon} text-[var(--color-accent)] hover:text-white cursor-pointer hover:scale-110 smooth-transition hover:border-[var(--color-accent)] hover:border rounded-full p-2`}
                                ></i>
                            </Tooltip>

                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex text-[var(--color-accent)] font-semibold tracking-widest justify-center items-center bg-[var(--color-bg)] ">
                        <div className="flex items-center w-1/2 border-r border-[var(--color-accent)]  gap-3 cursor-pointer hover:bg-gray-900 py-3 justify-center smooth-transition">
                            <h1>Download CV</h1>
                            <DownloadOutlinedIcon />
                        </div>
                        <div className="flex items-center  w-1/2 gap-3 cursor-pointer hover:bg-gray-900 py-3 justify-center smooth-transition">
                            <h1>Send a message</h1>
                            <SendOutlinedIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

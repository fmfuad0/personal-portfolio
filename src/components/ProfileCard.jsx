import React, { useEffect, useState } from "react";
import pexels1 from "../assets/pexels1.jpg";
import pexels2 from "../assets/pexels2.jpg";
import pexels3 from "../assets/pexels3.jpg";
// import avatar from "../assets/avatar1.png";
import avatar from "../assets/avatar5.jpg";
import Tooltip from "@mui/material/Tooltip";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import {useImageContext} from "../context/ViewImageContext.jsx";

const TypewriterParagraph = ({typingSpeed = 90, pauseTime = 1500, className ,}) => {
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


const ProfileCard = ({setSelected} ) => {
    const [i, setI] = useState(0);
    const images = [pexels1, pexels2, pexels3];
    const {setShowImages, setImages, setIndex}= useImageContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setI((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        { title: "Github", icon: "fa-github", link: "https://github.com/fmfuad0" },
        { title: "Google", icon: "fa-google", link: "fmfuad@gmail.com" },
        { title: "LinkedIn", icon: "fa-linkedin", link: "https://www.linkedin.com/in/fartin-fuad-bab684343" },
        { title: "Facebook", icon: "fa-facebook", link: "https://www.facebook.com//FFuuaadd" },
        { title: "X", icon: "fa-twitter", link: "https://twitter.com/fartinfuad" },
        { title: "WhatsApp", icon: "fa-whatsapp", link: "https://whatsapp.com" },
    ];

    return (

        <div className={`profile-card z-9 ml-2 left-0 w-[480px] h-[650px] rounded-lg overflow-hidden smooth-transition`}>
            {/* Background Image */}
            <div
                className="w-full h-[60%] bg-no-repeat bg-cover smooth-transition"
                style={{ backgroundImage: `url(${images[i]})` }}
            />

            {/* Profile Content */}
            <div className="profile-details relative bg-[var(--color-bg)] w-full text-center">
                {/* Avatar */}
                <div className="w-36 h-36 rounded-full absolute z-10 -top-[100px] left-[50%] -translate-x-[50%] -translate-y-15 overflow-hidden border-1 border-[var(--color-accent)] shadow-lg cursor-pointer" onClick={()=> {
                    setImages([avatar]);
                    setShowImages(true);
                    setIndex(0);
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
                        {socialLinks.map(({ title, icon, link }) => (
                            <Tooltip key={title} title={title} placement="top" arrow>
                                <a
                                    href={link}
                                    className={`fa-brands ${icon} text-[var(--color-accent)] hover:text-white cursor-pointer hover:scale-110 smooth-transition hover:border-[var(--color-accent)] hover:border rounded-full p-2`}
                                ></a>
                            </Tooltip>

                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex text-[var(--color-accent)] font-semibold tracking-widest justify-center items-center bg-[var(--color-bg)] ">
                        <div className="flex items-center w-1/2 border-r border-[var(--color-accent)]  gap-3 cursor-pointer hover:bg-gray-900 py-3 justify-center smooth-transition">
                            <h1>Download CV</h1>
                            <DownloadOutlinedIcon />
                        </div>
                        <button
                            className="flex items-center  w-1/2 gap-3 cursor-pointer hover:bg-gray-900 py-3 justify-center smooth-transition"
                            onClick={() =>{
                                setSelected("contact")}
                        }
                        >
                            <h1>Send a message</h1>
                            <SendOutlinedIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

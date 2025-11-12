import React, { useEffect, useState } from "react";
import Background from "./Background.jsx";
import Sidebar from "./Sidebar.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ImageViewer from "./ViewImage.jsx";
import { useImageContext } from "../context/ViewImageContext.jsx";
import socials from "../pages/Socials.jsx";

const Layout = ({ children }) => {
    const [visible, setVisible] = useState(true);
    const { images, index, showImages, setShowImages } = useImageContext();
    const [size, setSize] = useState(window.innerWidth);
    const [showChildrens, setShowChildrens] = useState(!visible);
    const tab = window.location.href.replace('http://localhost:5173/','').replace('/',)
    const [selected, setSelected] = useState(['about', 'resume', 'projects', 'contact', 'socials'].includes(tab.toLowerCase())?tab:"about");
    useEffect(() => {
        const handleResize = () => setSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log(showChildrens, visible);
    // toggle sidebar based on screen width
    useEffect(() => {
        setVisible(size > 1150);
    }, [size]);

    useEffect(() => {
        setShowChildrens(!visible || size>1150);
    }, [visible, size]);

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {showImages && (
                <div className="absolute inset-0 z-[100]">
                    <ImageViewer
                        images={images}
                        index={index}
                        onClose={() => setShowImages(false)}
                    />
                </div>
            )}

            {/* Background layer */}
            <Background />

            {/* Centered layout container */}
            <div className="relative flex items-center md:pt-10 justify-center w-full max-w-[1400px] mx-auto px-4">
                {/* Sidebar - vertically centered */}
                <div className="flex items-center h-full justify-center">
                    <Sidebar
                        setVisible={setVisible}
                        visible={visible}
                        selected={selected}
                        setSelected={setSelected}
                        size={size}
                    />
                </div>
                {/* Profile + Content Section */}
                <div className="flex lg:items-center justify-center">
                    {visible && <ProfileCard setSelected={setSelected} />}
                    {showChildrens && <div
                        className={`bg-transparent shadow-[0_1px_2px_var(--color-accent)] backdrop-blur-sm rounded-xl ${
                            visible ? "w-[45vw]" : "w-[60vw]"
                        } h-[650px] overflow-y-scroll scrollbar-hide`}
                    >
                        {children}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Layout;

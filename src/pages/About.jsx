import React from 'react';
import codeforcesIcon from '../assets/icons8-codeforces-24.png'
import leetcodeIcon from '../assets/icons8-leetcode-24.png'

const About = () => {
    return (
        <div className={`backdrop-blur-xs bg-[var(--color-bg)]/30 pb-10`}>
            <div className={`fading-border border-[thin] `}>
                <h1 className={`text-white p-5 text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>A</span>bout Me </h1>
            </div>
            <div   className={`p-6`}>
                <span className={`text-gray-400 py-2   text-lg font-semibold block`}>Hello I'm Md. Fartin Mahtadi Fuad .</span>
                <span className={`text-gray-400 py-2 text-lg block`}>I’m a dedicated <strong >Learner</strong> , <strong >Full-Stack Developer</strong> and a <strong >Problem Solver</strong> focused on creating reliable, performant, and visually appealing web applications.With hands-on experience in <strong>React.js, Node.js, Express, and MongoDB. </strong>I aim to craft seamless user journeys from front to back.As a <strong>Computer Science & Engineering undergraduate</strong>, I combine academic knowledge with real-world problem solving to build technology that matters.
                </span>
            </div>
            <div className={`fading-border border-[thin] mx-5`}>
                <h1 className={`text-white py-5 text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>P</span>rogramming and Development </h1>
            </div>
            <div className={`px-6 py-2`}>
                <div className={`text-gray-400 py-2 flex gap-5 justify-center`}>
                    <div className={`max-w-[48%] px-2`}>
                        <i className="fa-brands fa-react text-[var(--color-accent)] mb-2 text-3xl border rounded-full p-2"></i>
                        <strong className={`block text-white mb-2`}>Frontend Development</strong>
                        <span>As a <strong>Frontend Developer</strong>, I focus on transforming design concepts into interactive, responsive, and accessible user interfaces.<br/> I work extensively with <strong>React.js</strong>, crafting pixel-perfect layouts, smooth animations, and dynamic components that enhance user experience and looks visually engaging and intuitive.
                        </span>
                    </div>
                    <div className={`max-w-[48%] px-2`}>
                        <i className="fa-brands fa-node text-[var(--color-accent)] text-3xl mb-2 py-2 border rounded-full p-1 " ></i>
                        <strong className={`block text-white mb-2`}>Backend Development</strong>
                        <span>As a <strong>Backend Developer</strong>, I architect the logic and structure that power web applications behind the scenes. Using <strong>Node.js, Express.js, and MongoDB</strong>, I build secure, scalable APIs and manage efficient data flow between client and server. My focus is on reliability, performance, and clean code that keeps systems robust and maintainable.
                        </span>
                    </div>
                </div>
                <div className={`text-gray-400 py-2  text-lg font-semibold block`}></div>
            </div>
            <div className={`px-6 py-2 w-[80%] mx-auto`}>
                <div className={`text-gray-400 py-2 flex gap-5 justify-center`}>
                    <div className={`px-10 `}>
                        <div className={`flex justify-center gap-2 mb-2`}>
                            <img src={codeforcesIcon} className={`border rounded-full border-[var(--color-accent)] p-2`}  alt={''}/>
                            <img src={leetcodeIcon} className={`border rounded-full border-[var(--color-accent)] p-2`} alt={''}/>
                        </div>
                        <strong className={`block  text-center text-white mb-2`}>Problem Solving</strong>
                        <span className={`text-left`}>Problem solving is a must to keep your knowledge sharp and learn to solve complex coding problems and as well as real life programming scenarios. I have hands on problem solving experience in <strong>Codeforces, Leetcode.</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
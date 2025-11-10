import React, {useEffect} from 'react';
import { CircularProgressbarWithChildren,CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import vscodeIcon from '../assets/vscode.svg'
import webStormIcon from '../assets/webStormIcon.png'
import figmaIcon from '../assets/figma.png'
import githubIcon from '../assets/github.png'
import mongodbIcon from '../assets/mongodb.png'
import mongooseIcon from '../assets/mongoose.png'
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Resume = () => {

    const progressCircle = (value, icon, image)=>
        <CircularProgressbarWithChildren
            value={value}
            styles={buildStyles({
                // rotation: 0.25,
                textSize: '14px',
                // pathTransitionDuration: 0.5,
                trailColor: `var(--color-bg)`,
                textColor: 'var(--color-accent)',
                pathColor: 'var(--color-accent)',
            })}
        >
        {icon?<i className={`${icon} text-[var(--color-accent)] text-2xl mb-2 w-[24px]`}/> : ""}
        {image?<img src={image} alt={''} className={'w-[45px]'}/> : ""}
        <div style={{marginTop: -10}}>
            {value? <strong className={`text-lg text-[var(--color-accent)] p-0`}>{value}%</strong>:""}
        </div>
    </CircularProgressbarWithChildren>;
    const progressBar = (value, text)=>
        <div className="flex gap-2 items-center justify-center w-full">
            <div className="relative w-full h-3 bg-[var(--color-bg)] border-[var(--color-accent)] border rounded-xs">
                <div
                    className={`absolute top-0 left-0 h-full transition-all duration-500`}
                    style={{
                        width: value, // e.g., "70%"
                        background: 'var(--color-accent)'
                    }}
                ></div>
            </div>
            <strong className="whitespace-nowrap coro text-[var(--color-accent)] font-semibold text-xl">{text}</strong>
        </div>

    return (
        <div className={`backdrop-blur-sm `}>
            <div className={`fading-border border-[thin] `}>
                <h1 className={`text-white p-5 text-xl font-semibold tracking-widest`}><span className={`text-[var(--color-accent)]`}>R</span>esume </h1>
            </div>
            {/*Education*/}
            <div className={`px-6`}>
                <div className={`fading-border border-[thin] flex items-center gap-2 py-2`}>
                    <i className="fa-brands fa-leanpub text-[var(--color-accent)] text-3xl border rounded-full p-1"></i>
                    <h1 className={`text-white tracking-widest text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>E</span>ducation</h1>
                </div>
                <div className={'flex flex-col gap-1 py-3 px-2'} >
                    <div className={`border border-[var(--color-accent)] w-fit text-[var(--color-accent)] rounded px-1`}>2022-Present</div>
                    <strong className={`text-white text-xl`}>Green University Of Bangladesh</strong>
                    <strong className={`text-gray-400`}>Dhaka, Bangladesh</strong>
                    <strong className={`text-gray-400`}>Bachelor of Science in Computer Science And Engineering</strong>
                </div>
                <div className={'flex flex-col gap-1 py-3 px-2'} >
                    <div className={`border border-[var(--color-accent)] w-fit text-[var(--color-accent)] rounded px-1`}>2017-2019</div>
                    <strong className={`text-white text-xl`}>Cantonment Public School And Collage</strong>
                    <strong className={`text-gray-400`}>Saidpur, Bangladesh</strong>
                    <strong className={`text-gray-400`}>Higher Secondary Certificate (Science) </strong>
                </div>
                <div className={'flex flex-col gap-1 py-3 px-2'} >
                    <div className={`border border-[var(--color-accent)] w-fit text-[var(--color-accent)] rounded px-1`}>2013-2017</div>
                    <strong className={`text-white text-xl`}>Cantonment Public School And Collage</strong>
                    <strong className={`text-gray-400`}>Saidpur, Bangladesh</strong>
                    <strong className={`text-gray-400`}>Senior School Certificate (Science)</strong>
                </div>
            </div>
            {/*Programming skills*/}
            <div className={`fading-border border-[thin] `}>
                <h1 className={`text-white tracking-widest px-6 my-3 text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>C</span>oding <span className={`text-[var(--color-accent)]`}>S</span>kills </h1>
            </div>
            <div className={`py-3`}>
                <div className={'flex justify-around gap-15 py-5 flex-wrap'} >
                    <div className={`text-center w-[100px]`}>
                        {progressCircle(90, 'fa-brands fa-html5')}
                        <strong className={`text-gray-400` }>HTML/CSS</strong>
                    </div>

                    <div className={`text-center w-[100px]`}>
                        {progressCircle(80, 'fa-brands fa-js')}
                        <strong className={`text-gray-400` }>Javascript</strong>
                    </div>
                    <div className={`text-center w-[100px]`}>
                        {progressCircle(80, 'fa-brands fa-react')}
                        <strong className={`text-gray-400` }>React</strong>
                    </div>
                    <div className={`text-center w-[100px]`}>
                        {progressCircle(85, 'fa-brands fa-node-js')}
                        <strong className={`text-gray-400` }>Node.js</strong>
                    </div>
                    <div className={`text-center w-[100px]`}>
                        {progressCircle(85, 'fa-brands fa-e')}
                        <strong className={`text-gray-400` }>Express.js</strong>
                    </div>
                    <div className={`text-center w-[100px]`}>
                        {progressCircle(85, 'fa-solid fa-chart-diagram', )}
                        <strong className={`text-gray-400 whitespace-nowrap` }>Data Structures </strong>
                        <strong className={`text-gray-400` }> & Algorithms</strong>
                    </div>

                    <div className={`text-center w-[100px]`}>
                        {progressCircle(75, 'fa-solid fa-c')}
                        <strong className={`text-gray-400` }>C / C++</strong>
                    </div>
                    <div className={`text-center w-[100px]`}>
                        {progressCircle(70, 'fa-brands fa-java')}
                        <strong className={`text-gray-400` }>JAVA</strong>
                    </div>
                </div>
            </div>
            {/*Tool stack*/}
            <div className={`fading-border border-[thin]`}>
                <h1 className={`text-white tracking-widest px-6 my-3 text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>T</span>ool <span className={`text-[var(--color-accent)]`}>S</span>tack </h1>
            </div>
                <div className={`py-3`}>
                    <div className={'flex justify-around'} >
                        <div className={`text-center w-[70px]`}>
                            {progressCircle(0, '', vscodeIcon)}
                            <strong className={`text-gray-400` }>VS Code</strong>
                        </div>
                        <div className={`text-center w-[70px]`}>
                            {progressCircle(0, '', webStormIcon)}
                            <strong className={`text-gray-400` }>Webstorm</strong>
                        </div>
                        <div className={`text-center w-[70px]`}>
                            {progressCircle(0, '', mongodbIcon)}
                            <strong className={`text-gray-400` }>Mongo DB</strong>
                        </div>
                        <div className={`text-center w-[70px]`}>
                            {progressCircle(0, '', mongooseIcon)}
                            <strong className={`text-gray-400` }>Mongoose</strong>
                        </div>
                        <div className={`text-center w-[70px]`}>
                            {progressCircle(0, '', figmaIcon)}
                            <strong className={`text-gray-400` }>Figma</strong>
                        </div>
                        <div className={`text-center w-[70px]`}>
                            {progressCircle(0, '', githubIcon)}
                            <strong className={`text-gray-400` }>Github</strong>
                        </div>

                    </div>
                </div>
            {/*General Skills*/}
                <div className={`fading-border border-[thin] mt-5 px-6`}>
                    <h1 className={`text-white tracking-widest my-3 text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>G</span>eneral <span className={`text-[var(--color-accent)]`}>S</span>kills </h1>
                </div>
                <div className={'py-3 px-6'} >
                    <div className={'flex flex-col gap-2  items-start px-2'} >
                        <div className={`w-full`}>
                            <strong className={`text-gray-400 text-xl` }>Problem Solving</strong>
                            {progressBar('70%', 70)}
                        </div>
                        <div className={`w-full`}>
                            <strong className={`text-gray-400 text-xl` }>Design</strong>
                            {progressBar('90%', 90)}
                        </div>
                        <div className={`w-full`}>
                            <strong className={`text-gray-400 text-xl` }>Scalable Coding</strong>
                            {progressBar('80%', 80)}
                        </div>
                        <div className={`w-full`}>
                            <strong className={`text-gray-400 text-xl` }>Communication</strong>
                            {progressBar('90%', 90)}
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default Resume;
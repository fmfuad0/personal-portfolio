import React, {useEffect, useState} from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import HandyManIcon from '@mui/icons-material/HandyMan';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import {useNavigate, useParams} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('about');
    const [theme, setTheme] = useState('teal');
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        navigate(`/${selected}`)
    }, [navigate, selected, theme])
    
    const handleClick = (value)=>{
        setSelected(value);
        console.log(value)
        navigate(`/${value}`)
    }

    return (
        <div className="sidebar w-[80px] relative top-45 -translate-y-25 flex flex-col gap-2  bg-transparent">
            <div className={`bg-[var(--color-bg)] smooth-transition items-center w-full rounded-sm flex flex-col py-6 gap-3 `}>
                <FormatListBulletedIcon
                    style={{ color: "white" }}
                    className="hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer"
                />
                <span className={`smooth-transition`}>

                {
                    theme === 'teal' ?
                    <LightModeIcon
                        style={{color: 'white'}}
                        className="hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer"
                        onClick={()=>setTheme('light')}
                    /> :
                        <DarkModeIcon
                            style={{color: 'white'}}
                            className="hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer"
                            onClick={()=>setTheme('teal')}
                        />
                }
                </span>
            </div>
            <div className={`bg-[var(--color-bg)] smooth-transition rounded-sm flex flex-col items-center justify-around`}>
                <div className={`smooth-transition py-4 flex flex-col items-center gap-1 ${selected==='about' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('about')}}>

                    <AccountCircleIcon
                        style={{ color: "white" }}
                        className={`group-hover:!text-[var(--color-accent)] !smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='about' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[var(--color-accent)] ${selected==='about' ? '!text-[var(--color-accent)]' : ''}`} >About</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='resume' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('resume')}}>

                    <DescriptionIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='resume' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[var(--color-accent)] ${selected==='resume' ? '!text-[var(--color-accent)]' : ''}`} >Resume</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='projects' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('projects')}}>

                    <HandyManIcon
                        style={{ color: "white" }}
                        className={`group-hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='projects' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[var(--color-accent)] ${selected==='projects' ? '!text-[var(--color-accent)]' : ''}`} >Projects</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='contact' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('contact')}}>

                    <SendOutlinedIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[var(--color-accent)] group-hover:-rotate-45 transition-all smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='contact' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[var(--color-accent)] ${selected==='contact' ? '!text-[var(--color-accent)]' : ''}`} >Contact</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='socials' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('socials')}}>
                    <Diversity2OutlinedIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='socials' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[var(--color-accent)] ${selected==='socials' ? '!text-[var(--color-accent)]' : ''}`} >Socials</h1>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
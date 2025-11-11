import React, {useEffect, useState} from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import HandyIcon from '@mui/icons-material/HandyMan';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import {useNavigate} from "react-router-dom";

const Sidebar = ({setVisible, visible, selected, setSelected, size}) => {
    const navigate = useNavigate();
    const [selectedTheme, setSelectedTheme] = useState({
        name:"green",
        bg:"#061c17",
        accent:"#1aa164"
    });
    const [selectColor, setSelectColor] = useState(false);
    useEffect(() => {
        document.documentElement.dataset.theme = selectedTheme.name;
        navigate(`/${selected}`)
    }, [navigate, selected, selectedTheme])
    
    const handleClick = (value)=>{
        setSelected(value);
        console.log(value)
        if(size<1150)setVisible(false);
        navigate(`/${value}`)

    }
    const themes = [
        {
            name:"light",
            bg:"#222",
            accent:"#f6b846"
        }, {
            name:"blue",
            bg:"#091b1c",
            accent:"#96bae8"
        }, {
            name:"green",
            bg:"#061c17",
            accent:"#1aa164"
        }, {
            name:"orange",
            bg:"#1f1915",
            accent:"#f37c56"
        }, {
            name:"amber",
            bg:"#1e1e15",
            accent:"#ecbb4f"
        }, {
            name:"teal",
            bg:"#0c2323",
            accent:"#14b8a6"
        },
]

    return (
        <div className="sidebar w-[80px] h-full my-auto flex flex-col gap-2 smooth-transition bg-transparent smooth-transition">
            <div className={`${selectColor? "flex" : "hidden"} gap-1 flex-wrap bg-[var(--color-bg)] p-1 justify-between smooth-transition rounded-md`}>
                <h1 className={`w-full text-center uppercase tracking-[1px] text-[var(--color-accent)] font-bold`}>Themes</h1>

                {themes.map((item) => (
                    <span
                        className={`smooth-transition w-5 h-5 rounded-full ${selectedTheme.name===item.name ? "border-white border-2" : "" } cursor-pointer bg-red-400 overflow-hidden`}
                        onClick={() => setSelectedTheme(item)}
                    >
                        <div
                            className={`w-full h-[50%]`}
                            style={{backgroundColor: item.accent}}
                        >

                        </div>
                        <div
                            className={`w-full h-[50%] bg-blue-500`}
                            style={{backgroundColor: item.bg}}
                        >

                        </div>

                    </span>
                ))}
            </div>
            <div className={`bg-[var(--color-bg)] smooth-transition items-center w-full rounded-sm flex flex-col py-6 gap-3 `}>
                <FormatListBulletedIcon
                    style={{ color: "white" }}
                    className="hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer"
                    onClick={()=>setVisible(!visible)}
                />
                <span
                    className={`smooth-transition w-5 h-5 rounded-full border-white border-1 cursor-pointer`}
                    style={{backgroundColor: selectedTheme.accent}}
                    onClick={() => setSelectColor(!selectColor)}
                >

                </span>
            </div>
            <div className={`bg-[var(--color-bg)] smooth-transition rounded-sm flex flex-col items-center justify-around`}>
                <div className={`smooth-transition py-4 flex flex-col items-center gap-1 ${selected==='about' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('about')}}>

                    <AccountCircleIcon
                        style={{ color: "white" }}
                        className={`group-hover:!text-[var(--color-accent)] !smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='about' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-[1px] text-white text-[11px] uppercase group-hover:text-[var(--color-accent)] ${selected==='about' ? '!text-[var(--color-accent)]' : ''}`} >About</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='resume' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('resume')}}>

                    <DescriptionIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='resume' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-[1px] text-white text-[11px] uppercase group-hover:text-[var(--color-accent)] ${selected==='resume' ? '!text-[var(--color-accent)]' : ''}`} >Resume</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='projects' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('projects')}}>

                    <HandyIcon
                        style={{ color: "white" }}
                        className={`group-hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='projects' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-[1px] text-white text-[11px] uppercase group-hover:text-[var(--color-accent)] ${selected==='projects' ? '!text-[var(--color-accent)]' : ''}`} >Projects</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='contact' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('contact')}}>

                    <SendOutlinedIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[var(--color-accent)] group-hover:-rotate-45 transition-all smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='contact' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-[1px] text-white text-[11px] uppercase group-hover:text-[var(--color-accent)] ${selected==='contact' ? '!text-[var(--color-accent)]' : ''}`} >Contact</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 ${selected==='socials' ? ' border-[var(--color-accent)]' : 'border-gray-500'} border-b-[0.5px]  w-full text-center rounded-sm group cursor-pointer`} onClick={(e)=>{e.preventDefault();handleClick('socials')}}>
                    <Diversity2OutlinedIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[var(--color-accent)] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='socials' ? '!text-[var(--color-accent)]' : ''}`}
                    />
                    <h1 className={`tracking-[1px] text-white text-[11px] uppercase group-hover:text-[var(--color-accent)] ${selected==='socials' ? '!text-[var(--color-accent)]' : ''}`} >Socials</h1>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
import React, {useState} from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import HandyManIcon from '@mui/icons-material/HandyMan';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';

const Sidebar = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="sidebar w-[70px] relative top-45 -translate-y-25 h-100 flex flex-col gap-2  bg-transparent">
            <div className={`bg-[#222] items-center w-full rounded-sm flex flex-col py-6 gap-3 `}>
                <FormatListBulletedIcon
                    style={{ color: "white" }}
                    className="hover:!text-[#f6b846] smooth-transition duration-300 cursor-pointer"
                />
                <LightModeIcon
                    style={{color: 'white'}}
                    className="hover:!text-[#f6b846] smooth-transition duration-300 cursor-pointer"
                />
            </div>
            <div className={`bg-[#222] rounded-sm flex flex-col items-center justify-around`}>
                <div className={` py-4 flex flex-col items-center gap-1 border-gray-600 w-full text-center border-b-1 group cursor-pointer`} onClick={()=>setSelected('about')}>

                    <AccountCircleIcon
                        style={{ color: "white" }}
                        className={`group-hover:!text-[#f6b846] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='about' ? '!text-[#f6b846]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[#f6b846] ${selected==='about' ? '!text-[#f6b846]' : ''}`} >About</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 border-gray-600 w-full text-center border-b-1 group cursor-pointer`} onClick={()=>setSelected('resume')}>

                    <DescriptionIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[#f6b846] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='resume' ? '!text-[#f6b846]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[#f6b846] ${selected==='resume' ? '!text-[#f6b846]' : ''}`} >Resume</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 border-gray-600 w-full text-center border-b-1 group cursor-pointer`} onClick={()=>setSelected('projectscontact')}>

                    <HandyManIcon
                        style={{ color: "white" }}
                        className={`group-hover:!text-[#f6b846] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='projectscontact' ? '!text-[#f6b846]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[#f6b846] ${selected==='projectscontact' ? '!text-[#f6b846]' : ''}`} >Projects</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 border-gray-600 w-full text-center border-b-1 group cursor-pointer`} onClick={()=>setSelected('contact')}>

                    <SendOutlinedIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[#f6b846] hover:-rotate-45 transition-all smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='contact' ? '!text-[#f6b846]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[#f6b846] ${selected==='contact' ? '!text-[#f6b846]' : ''}`} >Contact</h1>
                </div>
                <div className={` py-4 flex flex-col items-center gap-1 border-gray-600 w-full text-center border-b-1 group cursor-pointer`} onClick={()=>setSelected('socials')}>
                    <Diversity2OutlinedIcon
                        style={{color: 'white'}}
                        className={`group-hover:!text-[#f6b846] smooth-transition duration-300 cursor-pointer w-[100%]  ${selected==='socials' ? '!text-[#f6b846]' : ''}`}
                    />
                    <h1 className={`tracking-widest text-white text-[10px] uppercase group-hover:text-[#f6b846] ${selected==='socials' ? '!text-[#f6b846]' : ''}`} >Socials</h1>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
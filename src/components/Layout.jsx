import React from "react";
import Background from "./Background.jsx";
import Sidebar from "./Sidebar.jsx";
import ProfileCard from "./ProfileCard.jsx";
import Button from "@mui/icons-material/close";

const Layout = ({children}) => {
    const [open, setOpen] = React.useState(false);
    const [avatar, setAvatar] = React.useState();

    return (
        <div className={`h-screen `}>
            <div className={`${open?"absolute" : "hidden"} top-0 left-0 h-full w-full z-100 smooth-transition`} style={{backgroundColor : 'rgba(0, 0, 0, 0.8)'}}>
                <div className={`absolute top-[50%] left-[50%] -translate-[50%] overflow-hidden rounded-lg smooth-transition`}>
                    <Button className={`relative left-[91%] top-10 fond-bold cursor-pointer hover:border-red-500 rounded-full z-100 hover:bg-[var(--color-)] hover:text-red-700 p-0.5 border smooth-transition`} onClick={()=>setOpen(false)} ></Button>
                    <img src={avatar} alt="Avatar" className="w-150 h-150   object-cover" />
                </div>
            </div>
            <Background/>
            <div className={`flex items-center justify-center`}>
                <div className={`max-w-[55%] flex items-center`}>
                    <Sidebar/>
                    <ProfileCard setOpen={setOpen} setAvatar={setAvatar}/>
                </div>
                <div className={`bg-transparent w-[45%] h-[620px] relative top-[100px] overflow-scroll -translate-y-[20px] left-0 `}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;

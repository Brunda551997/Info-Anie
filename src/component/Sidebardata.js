import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as BiIcons from "react-icons/bi";
export const Sidebardata=[
    {
        title:"Student",
        path:'/',
        icons:< IoIcons.IoPersonOutline size={25} style={{color:'#888888', display:'flex'}} />,
        cName:'nav-text'
    },
    {
        title:"Lesson",
        path:'/lesson',
        icons:<BiIcons.BiBook size={25} style={{color:'#888888'}} />,
        cName:'nav-text'
    },
    {
        title:"Setting",
        path:'/setting',
        icons:<AiIcons.AiOutlineSetting size={25} style={{color:'#888888'}}/>,
        cName:'nav-text'
    },
]
import React from "react";
import { FaHome } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const SidebarData = [
    {
        icon: <FaHome size={30}/>,
        link: 'home',
    },
    {
        icon: <ImBooks size={30}/>,
        link: 'modules',
    },
    {
        icon: <BsFillPersonLinesFill size={30}/>,
        link: 'instructor',
    },
]
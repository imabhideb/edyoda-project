import React from "react";
import { AiFillPlayCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import a from '../Assets/Icons/activeAssignment.svg'

export const ModuleSidebardata = [
    {
        icon: <AiFillPlayCircle size={25} />,
        title: 'Python Loops',
        link: 'home',
    },
    {
        icon: <AiOutlineQuestionCircle size={25} />,
        title: "Quiz-1: Data Types",
        link: 'modules',
    },
    {
        icon: <img src={a} alt="" />,
        title: `Assignment-1: Operators | Loops`,
        link: 'instructor',
    },
]
import { useState } from "react";
import Content1 from "./Content1";
import { FcInfo } from 'react-icons/fc'
import { BsPlayCircle, BsCameraVideo } from 'react-icons/bs'
import { HiOutlineDocument } from 'react-icons/hi'

const PythonContentTab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="flex flex-col pl-[100px] pt-[100px] items-start">
            <div className="flex">
                <button
                    className={toggleState === 1 ? "w-[200px] bg-white" : " bg-transparent w-[200px] h-[50px] pr-5 py-2"}
                    onClick={() => toggleTab(1)}
                >
                    <div className="flex justify-center items-center gap-1">
                        <FcInfo size={23} />
                        <h1>SESSION PLAN</h1>
                    </div>
                </button>
                <button
                    className={toggleState === 2 ? "w-[200px] bg-white" : " bg-transparent w-[200px] h-[50px] pr-5 py-2"}
                    onClick={() => toggleTab(2)}
                >
                    <div className="flex justify-center items-center gap-1">
                        <BsPlayCircle />
                        <h1>PRE-WATCH VIDEOS</h1>
                    </div>
                </button>
                <button
                    className={toggleState === 3 ? "w-[200px] bg-white" : " bg-transparent w-[200px] h-[50px] pr-5 py-2"}
                    onClick={() => toggleTab(3)}
                >
                    <div className="flex justify-center gap-1 items-center">
                        <BsCameraVideo />
                        <h1>SESSION RECORDING</h1>
                    </div>
                </button>
                <button
                    className={toggleState === 4 ? "w-[200px] bg-white" : " bg-transparent w-[200px] h-[50px] pr-5 py-2"}
                    onClick={() => toggleTab(4)}
                >
                    <div className=" flex justify-center items-center gap-1">
                        <HiOutlineDocument />
                        <h1>REFERENCES</h1>
                    </div>
                </button>
            </div>
            <div className="">
                <div
                    className={toggleState === 1 ? " rounded-b-lg shadow-md bg-white shadow-blue-200 border visible w-[1000px] h-[500px]" : "hidden"}
                >
                    <Content1 />
                </div>


                <div
                    className={toggleState === 2 ? " rounded-b-lg shadow-lg bg-white shadow-blue-200 border visible w-[1000px] h-[500px]" : "hidden"}
                >
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>


                <div
                    className={toggleState === 3 ? " rounded-b-lg shadow-lg bg-white shadow-blue-200 border visible w-[1000px] h-[500px]" : "hidden"}
                >
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>


                <div
                    className={toggleState === 4 ? " rounded-b-lg shadow-lg bg-white shadow-blue-200 border visible w-[1000px] h-[500px]" : "hidden"}
                >
                    <h2>Content 4</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default PythonContentTab;
import React, { useEffect, useState } from 'react'

const menuOption = [
    "HOME",
    "ELECTRONICS",
    "BOOKS",
    "MUSIC",
    "MOVIES",
    "CLOTHING",
    "GAMES",
    "FURNITURE",
    "TRAVEL",
    "BOTANICAL",
    "CATEGORY NAME"
]

const Navbar = () => {

    const [showingOptionNumber, setShowingOptionNumber] = useState(7)
    const [moreFlag, setMoreFlag] = useState(false)

    const updateShowingOptionNumber = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1260 && screenWidth > 1190) {
            setShowingOptionNumber(6);
        }
        else if (screenWidth < 1190 && screenWidth > 1024) {
            setShowingOptionNumber(5);
        }
        else if (screenWidth < 1024 && screenWidth > 950) {
            setShowingOptionNumber(4);
        }
        else if (screenWidth < 958 && screenWidth > 890) {
            setShowingOptionNumber(3);
        }
        else if (screenWidth < 890 && screenWidth > 768) {
            setShowingOptionNumber(2);
        }
        else if (screenWidth < 768 && screenWidth > 650) {
            setShowingOptionNumber(1);
        }
        else if (screenWidth < 650) {
            setShowingOptionNumber(0);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateShowingOptionNumber);
        return () => {
            window.removeEventListener('resize', updateShowingOptionNumber);
        };
    }, []);

    return (
        <div className="bg-[#2F302C] text-white px-2 py-4 sm:px-4 flex justify-around items-center">
            <div className="flex justify-start items-center gap-2">
                <img className="max-[350px]:h-5 h-9" src="/Images/logo.svg" alt="logo" />
                <h1 className="max-[350px]:text-xl text-2xl font-semibold">E-COMM</h1>
            </div>
            <div className="flex justify-center items-center gap-8">
                {menuOption.slice(0, showingOptionNumber).map((op) => (
                    <button className="hover:text-[#83CEF9]" key={op}>{op}</button>
                ))}
                <div className="relative">
                    <button onClick={() => { setMoreFlag(prev => !prev) }} className="flex justify-center items-center gap-2 hover:text-[#83CEF9]">
                        <span>MORE</span>
                        {moreFlag ?
                            <img className="rotate-180" src="/Images/downArrow.svg" alt="down arrow" /> :
                            <img src="/Images/downArrow.svg" alt="down arrow" />
                        }
                    </button>
                    {moreFlag &&
                        <div className="absolute top-14 left-0 bg-[#2F302C] px-4 py-8 rounded-xl w-[200px] flex flex-col items-start justify-start gap-4">
                            {menuOption.slice(showingOptionNumber, menuOption.length).map(op => (
                                <button className="hover:text-[#83CEF9]" key={op}>{op}</button>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 border-b-2 border-white max-sm:w-[100px]">
                <img src="/Images/search.svg" />
                <input className="px-4 py-2 bg-inherit outline-none w-full" placeholder="Search" />
            </div>
        </div>
    )
}

export default Navbar

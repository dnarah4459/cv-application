import { useState } from "react"
import fileAccount from "../assets/assets/file-account.svg"; 
import { useContext } from "react";
import { ResumeReferenceContext } from "../App"; 
import html2canvas from "html2canvas"; 

export default function Header() {
    const resumeDivRef = useContext(ResumeReferenceContext); 

    //this function gets executed.  
    const handleDownloadButtonClick = async () => {
        const canvas = await html2canvas(resumeDivRef.current);
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'resume.png';
        link.click();
      };

    return (
        <div className="flex justify-between border-2 border-black p-3 bg-[#ede4dd] items-center font-sans px-[18px]">
            <div>
                <img src={fileAccount} alt="" className="w-[43px]"/>
            </div>
            <h1 className="text-[24px] font-[700]">Build Your Resume</h1>
            <button className="text-[16px] p-[6px] font-[600] bg-[#D2D5DA] hover:bg-[#94979a] transition-colors duration-300" onClick={handleDownloadButtonClick}>
                Download
            </button>
        </div>
    )
}



import { useState } from "react"
import plusIcon from "../../assets/assets/plus.svg"; 
import minusIcon from "../../assets/assets/minus.svg"; 

export default function SidebarHeader({symbol, title, setSymbol}) {
    const changeSymbol = () => {
        if(symbol == plusIcon){
            setSymbol(minusIcon)
        } else {
            setSymbol(plusIcon)
        }
    }
    
    return (
        <div className="flex justify-between items-center px-1 pb-[7px]">
            <h1 className="font-[650] text-[18px]">{title}</h1>
            <button onClick = {changeSymbol}>
                <img src={symbol} alt="" className="w-[25px]"/>
            </button>
        </div>
    )
}
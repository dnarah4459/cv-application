import plusIcon from "../../assets/assets/plus.svg"; 
import minusIcon from "../../assets/assets/minus.svg"; 
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";

export default function ProfessionalSummary({professionalSummary, setProfessionalSummary}) {
    let[symbol, setSymbol] = useState(plusIcon); 

    return(
        <div className="flex flex-col gap-2 border-b-2 border-black p-1">
            <SidebarHeader title = "Professional Summary" symbol={symbol} setSymbol={setSymbol}/>
            {symbol == minusIcon && (
               <textarea rows="4" cols="30" name="" id="" className="m-2 p-1 text-[14px]" value={professionalSummary} onChange={(e) => {setProfessionalSummary(e.target.value)}}>

               </textarea>
            )}

        </div>
    )
}
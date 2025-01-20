import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import plusSymbol from "../../assets/assets/plus.svg"; 
import minusSymbol from "../../assets/assets/minus.svg"; 


export default function PersonalInformation({firstName, lastName, age, setFirstName, setLastName, setAge}) {
    let [symbol, setSymbol] = useState(plusSymbol); 

    return (
        <div className="flex flex-col border-b-2 gap-2 border-black p-1">
            <SidebarHeader symbol = {symbol} title = "Personal Information" setSymbol = {setSymbol}/>
            {symbol == minusSymbol && (
                <form action="" className="flex flex-col gap-4 p-1 mb-2">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[16px] font-[550]">First Name</h1>
                        <input type="text" value = {firstName} onChange={(e) => {setFirstName(e.target.value)}} className="p-1"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-[16px] font-[550]">Last Name</h1>
                        <input 
                            type="text" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            className="p-1"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-[16px] font-[550]">Age</h1>
                        <input type="text" value = {age} onChange={(e) => {setAge(e.target.value)}} className="p-1"/>
                    </div>
                </form>
            )} 
        </div>
    )
}
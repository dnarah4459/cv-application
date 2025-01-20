import plusIcon from "../../assets/assets/plus.svg";
import minusIcon from "../../assets/assets/minus.svg";
import SidebarHeader from "./SidebarHeader";
import locationExit from "../../assets/assets/location-exit.svg";
import plusBlue from "../../assets/assets/plusBlue.svg";
import { v4 as uuidv4, v6 as uuidv6 } from "uuid";

import { useState } from "react";

export default function Education({ educationList, setEducationList }) {
  let [symbol, setSymbol] = useState(plusIcon);
  let [showForm, setShowForm] = useState(false);

  const handleEducationFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEducationObj = {
      university: formData.get("university"),
      degree: formData.get("degree"),
      from: formData.get("from"),
      to: formData.get("to"),
      key: uuidv4(),
    };
    setEducationList([...educationList, newEducationObj]);
    setShowForm(false);
  };
  const changeSymbol = () => {
    if (symbol == plusIcon) {
      setSymbol(minusIcon);
    } else {
      setSymbol(plusIcon);
      setShowForm(false); 
    }
  };
  return (
    <div className="flex flex-col gap-[11px] border-b-2 border-black p-1">
      <div className="flex justify-between items-center px-1 pb-[7px]">
        <h1 className="font-[650] text-[18px]">Education</h1>
        <button onClick={changeSymbol}>
          <img src={symbol} alt="" className="w-[25px]" />
        </button>
      </div>

      {symbol == minusIcon && (
        <>
          {showForm ? (
            <form
              action=""
              className="flex flex-col gap-4 p-2"
              onSubmit={handleEducationFormSubmit}
            >
              <div className="flex flex-col gap-2">
                <h1>University</h1>
                <input
                  type="text"
                  className="p-[2px]"
                  name="university"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1>Degree</h1>
                <input type="text" className="p-[2px]" name="degree" required />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-[14px">From</h1>
                <input type="date" className="p-[2px]" name="from" required />
              </div>

              <div className="flex flex-col gap-2">
                <h1>To</h1>
                <input type="date" className="p-[2px]" name="to" required />
              </div>

              <div className="flex items-center justify-between mb-1 mt-3 px-1">
                <button className="p-2 bg-gray-300">Submit</button>
                <div className="cursor-pointer">
                  <img src={locationExit} alt="" className="w-[27px]" />
                </div>
              </div>
            </form>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <div className="flex justify-around p-[6px] bg-[#D2D5DA] m-[5px]">
                  <h1>University</h1>
                  <h1>Degree</h1>
                  <h1>From</h1>
                  <h1>To</h1>
                </div>

                <div className="flex flex-col gap-1">
                  {educationList.map((element) => {
                    return (
                      <div
                        key={element.key}
                        className="flex gap-5 justify-between overflow-x-auto whitespace-nowrap p-2 bg-gray-200 m-2"
                      >
                        <h1 className="text-[15px]">
                          Education: {element.university}
                        </h1>
                        <h1 className="text-[15px]">
                          Degree: {element.degree}
                        </h1>
                        <h1 className="text-[15px]">From: {element.from}</h1>
                        <h1 className="text-[15px]">To: {element.to}</h1>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-2 relative left-[6px] mb-2">
                  <button
                    onClick={() => {
                      setShowForm(true);
                    }}
                    className="cursor-pointer"
                  >
                    <img src={plusBlue} alt="" className="w-[18px]" />
                  </button>
                  <h1 className="text-[14px] font-[550] text-blue-600">
                    Add One More
                  </h1>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

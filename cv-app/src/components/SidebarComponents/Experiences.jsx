import { useState } from "react";
import plusIcon from "../../assets/assets/plus.svg";
import minusIcon from "../../assets/assets/minus.svg";
import plusBlue from "../../assets/assets/plusBlue.svg";
import locationExit from "../../assets/assets/location-exit.svg"; 
import { v4 as uuidv4, v6 as uuidv6 } from "uuid";

export default function Experiences({experiencesList, setExperiencesList}) {
    //whatever is in the return part of the component comes back, but it astill has all of this extra funcitonality. tha tis above the reunt apart. it still has all that extra funcitonality
  let [symbol, setSymbol] = useState(plusIcon);
  let [showForm, setShowForm] = useState(false);

  const changeSymbol = () => {
    if (symbol == plusIcon) {
      setSymbol(minusIcon);
    } else {
      setSymbol(plusIcon);
    }
  };

  const handleExperiencesFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newExperincesObj = {
      company: formData.get("company"),
      title: formData.get("title"),
      from: formData.get("from"),
      to: formData.get("to"),
      key: uuidv4(),
    };
    setExperiencesList([...experiencesList, newExperincesObj]);
    setShowForm(false);
  };

  const handleAddExperienceClick = () => {
    setShowForm(true);
  };

  const handleExitButtonClick = () => {
    setShowForm(false);
  }

  return (
    <div className="flex flex-col gap-4 border-b-2 border-black p-1">
      <div className="flex justify-between items-center px-1 pb-[6px]">
        <h1 className="font-[650] text-[18px]">Experiences</h1>
        <button onClick={changeSymbol}>
          <img src={symbol} alt="" className="w-[25px]" />
        </button>
      </div>

      {symbol == minusIcon && (
        <>
          {showForm ? (
            <form action="" className="flex flex-col gap-4 p-2" onSubmit={handleExperiencesFormSubmit}>
              <div className="flex flex-col gap-2">
                <h1>Company</h1>
                <input
                  type="text"
                  className="p-[2px]"
                  name="company"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1>Title</h1>
                <input type="text" className="p-[2px]" name="title" required />
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
                <div className="cursor-pointer" onClick={handleExitButtonClick}>
                  <img src={locationExit} alt="" className="w-[27px]" />
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex justify-around p-[6px] bg-[#D2D5DA] m-[5px]">
                <h1>Company</h1>
                <h1>Title</h1>
                <h1>From</h1>
                <h1>To</h1>
              </div>

              <div className="flex gap-2 items-center m-1 pl-1">
                <button onClick={handleAddExperienceClick}>
                  <img
                    src={plusBlue}
                    alt=""
                    className="w-[18px] cursor-pointer"
                  />
                </button>
                <h1 className="text-[14px] text-blue-600">Add One More</h1>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

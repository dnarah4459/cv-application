import plusIcon from "../../assets/assets/plus.svg";
import minusIcon from "../../assets/assets/minus.svg";
import SidebarHeader from "./SidebarHeader";
import plusCircleOutline from "../../assets/assets/plus-circle-outline.svg";
import { v4 as uuidv4, v6 as uuidv6 } from "uuid";
import { useState } from "react";

export default function Skills({ skillsList, setSkillsList }) {
  let [symbol, setSymbol] = useState(plusIcon);

  const handleSkillSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    const formData = new FormData(e.target);
    const skillName = formData.get("skill");

    const newSkillObj = {
      skill: skillName,
      key: uuidv4(),
    };
    e.target.reset();
    setSkillsList([...skillsList, newSkillObj]);
  };

  return (
    <div className="flex flex-col border-b-2 gap-2 border-black p-1">
      <SidebarHeader title="Skills" symbol={symbol} setSymbol={setSymbol} />
      {symbol == minusIcon && (
        <>
          <div className="flex flex-wrap gap-2 p-2">
            {skillsList.map((element) => {
              return (
                <div className="p-2" key={element.key}>
                  {element.skill}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 m-1">
            <h1 className="text-[16px] font-[600] relative left-1">
              Add Skill
            </h1>
            <div className="relative">
              <form action="" onSubmit={handleSkillSubmit}>
                <button type="submit">
                  <img
                    src={plusCircleOutline}
                    alt=""
                    className="w-[20px] absolute top-3 right-3 cursor-pointer"
                  />
                </button>

                <input
                  type="text"
                  className="p-2 bg-white border-2 w-full"
                  name="skill"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

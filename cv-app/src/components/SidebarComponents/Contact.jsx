import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import plusIcon from "../../assets/assets/plus.svg";
import minusIcon from "../../assets/assets/minus.svg";

export default function Contact({
  email,
  setEmail,
  phone,
  setPhone,
  linkedin,
  setLinkedin,
  gitHub,
  setGitHub,
  website,
  setWebsite,
}) {
  let [symbol, setSymbol] = useState(plusIcon);

  return (
    <div className="flex flex-col gap-1 font-sans border-b-2 border-black p-1">
      <SidebarHeader title="Contact" symbol={symbol} setSymbol={setSymbol} />

      {symbol == minusIcon && (
        <form className="flex flex-col gap-4 p-2">

          <div className="flex flex-col gap-2">
            <h1 className="text-[16px]">Email</h1>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="p-[3px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1>Phone</h1>
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            className="p-[3px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1>LinkedIn</h1>
            <input
              type="text"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
              }}
            className="p-[3px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1>Github</h1>
            <input
              type="text"
              value={gitHub}
              onChange={(e) => {
                setGitHub(e.target.value);
              }}
              className="p-[3px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1>Website</h1>
            <input
              type="text"
              value={website}
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
              className="p-[3px]"
            />
          </div>
        </form>
      )}
    </div>
  );
}

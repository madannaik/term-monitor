import React, { useState } from "react";
import Image from "next/image";
import icon from "../public/icon.svg";
import star from "../public/star.svg";
import { options } from "../utils/constants";
import Dashboard from "./Dashboard";

export default function MainPage() {
  const [state, setstate] = useState<Boolean>(false);

  return (
    <div className="section">
      <div className="section__navbar">
        <div className="section__navbar--item ">
          <Image src={icon} className="heading--image" width="40" />
          <h1>TermMonitor</h1>
        </div>
        {options.map((data) => {
          return (
            <div className="section__navbar--items ">
              <div>
                <Image src={data.image} alt={"add-icon"} />
              </div>
              <h1>{data.name}</h1>
            </div>
          );
        })}
        <div
          className="section__navbar--items more-settings"
          onClick={() => setstate(!state)}
        >
          <div>
            <Image src={options[3].image} alt={"add-icon"} />
          </div>
          <h1>{"Settings"}</h1>
        </div>
        <div
          className="section__navbar--items hidden"
          style={{
            height: `${state ? "5rem" : "0"}`,
            
          }}
        >
          <h1>{"Billing"}</h1>
        </div>
      </div>
      <div className="section__dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

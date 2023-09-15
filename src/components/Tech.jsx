import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="flex flex-col items-center" key={technology.name}>
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
          <h2 className="text-center text-secondary text-semibold">{technology.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

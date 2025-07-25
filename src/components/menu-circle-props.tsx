import React from "react";
import { SliderInput } from "./input-field";

interface MenuCirclePropertiesProps {
  durationInitial: number;
  setDurationInitial: (value: number) => void;
  durationOnAnimate: number;
  setDurationOnAnimate: (value: number) => void;
  durationOnExit: number;
  setDurationOnExit: (value: number) => void;
}

export const MenuCircleProperties: React.FC<MenuCirclePropertiesProps> = ({
  durationInitial,
  setDurationInitial,
  durationOnAnimate,
  setDurationOnAnimate,
  durationOnExit,
  setDurationOnExit,
}) => {
  return (
    <div className="w-full p-4 bg-white-400 rounded-[.5rem] flex flex-col items-start shadow-[1px_1px_3px_0px_rgba(0,_0,_0,_0.08)]">
      <h2 className="mb-6 text-black-100 text-[1.5rem] font-bold">
        Circle Menu Specific Properties
      </h2>

      <SliderInput
        label="Duration Initial"
        description='Time for the initial animation (menu entering, ex: "0.5", "0.75")'
        value={durationInitial}
        onChange={(e) => setDurationInitial(Number(e.target.value))}
        min={0}
        max={10}
        step={0.01}
      />

      <SliderInput
        label="Duration Animate"
        description='Time for the animation when fully displayed, (ex: "0.5", "0.75")'
        value={durationOnAnimate}
        onChange={(e) => setDurationOnAnimate(Number(e.target.value))}
        min={0}
        max={10}
        step={0.01}
      />

      <SliderInput
        label="Duration Exit"
        description='Time for the exit animation (menu leaving, ex: "0.5", "0.75")'
        value={durationOnExit}
        onChange={(e) => setDurationOnExit(Number(e.target.value))}
        min={0}
        max={10}
        step={0.01}
      />
    </div>
  );
};

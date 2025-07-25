import React from "react";
import { InputField, SliderInput } from "./input-field";

interface MenuStairsPropertiesProps {
  stairsStyle: string;
  setStairsStyle: (value: string) => void;
  stairsCount: number;
  setStairsCount: (value: number) => void;
  delayInitial: number;
  setDelayInitial: (value: number) => void;
  delayOnAnimate: number;
  setDelayOnAnimate: (value: number) => void;
  delayOnExit: number;
  setDelayOnExit: (value: number) => void;
  durationInitial: number;
  setDurationInitial: (value: number) => void;
  durationOnAnimate: number;
  setDurationOnAnimate: (value: number) => void;
  durationOnExit: number;
  setDurationOnExit: (value: number) => void;
}

export const MenuStairsProperties: React.FC<MenuStairsPropertiesProps> = ({
  stairsStyle,
  setStairsStyle,
  stairsCount,
  setStairsCount,
  delayInitial,
  setDelayInitial,
  delayOnAnimate,
  setDelayOnAnimate,
  delayOnExit,
  setDelayOnExit,
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
        Stairs Menu Specific Properties
      </h2>
      <label className="text-black-100 text-[1rem] font-[600]">
        Stairs Animation Style
      </label>
      <span className="relative mb-2 text-black-100/75 text-[.8rem] font-semibold">
        Choose the stairs animation direction
      </span>
      <select
        value={stairsStyle}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setStairsStyle(e.target.value)
        }
        className="mb-6 w-full h-10 px-3 text-[.9rem] font-[600] text-black-100/75 bg-white-300 rounded-[.5rem] outline-none transition-all"
      >
        <option value="StairsUp">Stairs Up</option>
        <option value="StairsDown">Stairs Down</option>
        <option value="StairsLeft">Stairs Left</option>
        <option value="StairsRight">Stairs Right</option>
      </select>

      <SliderInput
        label="Duration Initial"
        description='Time for the initial animation (menu entering, ex: "0.5", "0.75")'
        value={durationInitial}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDurationInitial(Number(e.target.value))
        }
        min={0}
        max={10}
        step={0.01}
      />

      <SliderInput
        label="Duration Animate"
        description='Time for the animation when fully displayed, (ex: "0.5", "0.75")'
        value={durationOnAnimate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDurationOnAnimate(Number(e.target.value))
        }
        min={0}
        max={10}
        step={0.01}
      />

      <SliderInput
        label="Duration Exit"
        description='Time for the exit animation (menu leaving, ex: "0.5", "0.75")'
        value={durationOnExit}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDurationOnExit(Number(e.target.value))
        }
        min={0}
        max={10}
        step={0.01}
      />

      <SliderInput
        label="Stairs Count"
        description="Number of stairs columns"
        value={stairsCount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStairsCount(Number(e.target.value))
        }
        min={2}
        max={12}
        step={1}
      />

      <SliderInput
        label="Delay Initial"
        description="Delay multiplier for initial animation"
        value={delayInitial}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDelayInitial(Number(e.target.value))
        }
        min={0}
        max={10}
        step={0.01}
      />

      <SliderInput
        label="Delay Animate"
        description="Delay multiplier for animate"
        value={delayOnAnimate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDelayOnAnimate(Number(e.target.value))
        }
        min={0}
        max={10}
        step={0.01}
      />

      <SliderInput
        label="Delay Exit"
        description="Delay multiplier for exit animation"
        value={delayOnExit}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDelayOnExit(Number(e.target.value))
        }
        min={0}
        max={10}
        step={0.01}
      />
    </div>
  );
};

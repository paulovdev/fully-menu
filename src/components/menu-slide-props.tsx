import React from "react";
import { InputField, SelectField, SliderInput } from "./input-field";

interface MenuSlidePropertiesProps {
  slideStyle: string;
  setSlideStyle: (value: string) => void;
  durationInitial: number;
  setDurationInitial: (value: number) => void;
  durationOnAnimate: number;
  setDurationOnAnimate: (value: number) => void;
  durationOnExit: number;
  setDurationOnExit: (value: number) => void;
}

export const MenuSlideProperties: React.FC<MenuSlidePropertiesProps> = ({
  slideStyle,
  setSlideStyle,
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
        Slide Menu Specific Properties
      </h2>
      <label className="text-black-100 text-[1rem] font-[600]">
        Slide Animation Style
      </label>
      <span className="relative mb-2 text-black-100/75 text-[.8rem] font-semibold">
        Choose the direction from which the menu should appear
      </span>
      <SelectField
        label="Slide Style"
        description="Escolha a direção da animação"
        value={slideStyle}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSlideStyle(e.target.value)
        }
        options={[
          { label: "Slide Up", value: "SlideUp" },
          { label: "Slide Down", value: "SlideDown" },
          { label: "Slide Left", value: "SlideLeft" },
          { label: "Slide Right", value: "SlideRight" },
        ]}
      />

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
    </div>
  );
};

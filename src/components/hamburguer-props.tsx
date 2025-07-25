import React from "react";
import { ColorInput, SliderInput } from "@/components/input-field";

interface HamburgerPropertiesProps {
  hamburgerColor: string;
  setHamburgerColor: (value: string) => void;
  hamburgerOpenColor: string;
  setHamburgerOpenColor: (value: string) => void;
  hamburgerSpacing: number;
  setHamburgerSpacing: (value: number) => void;
  hamburgerBarWidth: number;
  setHamburgerBarWidth: (value: number) => void;
  hamburgerBarHeight: number;
  setHamburgerBarHeight: (value: number) => void;
  hamburgerIndex: number;
  setHamburgerIndex: (value: number) => void;
}

export const HamburgerProperties: React.FC<HamburgerPropertiesProps> = ({
  hamburgerColor,
  setHamburgerColor,
  hamburgerOpenColor,
  setHamburgerOpenColor,
  hamburgerSpacing,
  setHamburgerSpacing,
  hamburgerBarWidth,
  setHamburgerBarWidth,
  hamburgerBarHeight,
  setHamburgerBarHeight,
  hamburgerIndex,
  setHamburgerIndex,
}) => {
  return (
    <div className="w-full p-3 bg-white-400 rounded-[.5rem] flex flex-col items-start shadow-[1px_1px_3px_0px_rgba(0,_0,_0,_0.08)]">
      <h2 className="mb-6 text-black-100 text-[1.5rem] font-bold">
        Hamburger Properties
      </h2>

      <ColorInput
        label="Hamburger Color"
        description="Color of the hamburger bars when closed"
        value={hamburgerColor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHamburgerColor(e.target.value)
        }
      />
      <ColorInput
        label="Hamburger Open Color"
        description="Color of the hamburger bars when opened"
        value={hamburgerOpenColor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHamburgerOpenColor(e.target.value)
        }
      />

      <SliderInput
        label="Spacing"
        description="Spacing between the top and bottom bars"
        value={hamburgerSpacing}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHamburgerSpacing(Number(e.target.value))
        }
        min={1}
        max={42}
        step={1}
      />

      <SliderInput
        label="Bar Width"
        description="Width of each hamburger bar"
        value={hamburgerBarWidth}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHamburgerBarWidth(Number(e.target.value))
        }
        min={1}
        max={52}
        step={1}
      />

      <SliderInput
        label="Bar Height"
        description="Height/thickness of each hamburger bar"
        value={hamburgerBarHeight}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHamburgerBarHeight(Number(e.target.value))
        }
        min={1}
        max={12}
        step={1}
      />

      <SliderInput
        label="Hamburger Index"
        description="Z-index used to control hamburger button layer"
        value={hamburgerIndex}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHamburgerIndex(Number(e.target.value))
        }
        min={10}
        max={100}
        step={10}
      />
    </div>
  );
};

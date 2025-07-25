import React from "react";
import { ColorInput, InputField, SliderInput } from "./input-field";

type MenuCommonPropertiesProps = {
  menuBg: string;
  setMenuBg: (value: string) => void;
  menuWidth: string;
  setMenuWidth: (value: string) => void;
  menuHeight: string;
  setMenuHeight: (value: string) => void;
  menuPadding: string;
  setMenuPadding: (value: string) => void;
  menuMargin: string;
  setMenuMargin: (value: string) => void;
  menuIndex: number;
  setMenuIndex: (value: number) => void;
};

export const MenuCommonProperties: React.FC<MenuCommonPropertiesProps> = ({
  menuBg,
  setMenuBg,
  menuWidth,
  setMenuWidth,
  menuHeight,
  setMenuHeight,
  menuPadding,
  setMenuPadding,
  menuMargin,
  setMenuMargin,
  menuIndex,
  setMenuIndex,
}) => {
  return (
    <div className="w-full p-4 bg-white-400 rounded-[.5rem] flex flex-col items-start shadow-[1px_1px_3px_0px_rgba(0,_0,_0,_0.08)]">
      <h2 className="mb-6 text-black-100 text-[1.5rem] font-bold">
        Menu Properties (Common)
      </h2>

      <ColorInput
        label="Menu Background"
        description="Background color of the menu container"
        value={menuBg}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMenuBg(e.target.value)
        }
      />

      <SliderInput
        label="Menu Width"
        description="Total width of the menu"
        value={parseInt(menuWidth)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMenuWidth(e.target.value + "vw")
        }
        min={10}
        max={100}
        step={10}
        paramCode="vw"
      />

      <SliderInput
        label="Menu Height"
        description="Total height of the menu"
        value={parseInt(menuHeight)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMenuHeight(e.target.value + "vh")
        }
        min={10}
        max={100}
        step={10}
        paramCode="vh"
      />

      <InputField
        label="Padding"
        description="Padding inside the menu (ex: 20px or 10px 15px)"
        value={menuPadding}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMenuPadding(e.target.value)
        }
        placeholder="ex: 20px"
      />

      <InputField
        label="Margin"
        description="Outer space around the menu (ex: 50px 10px)"
        value={menuMargin}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMenuMargin(e.target.value)
        }
        placeholder="ex: 70px 20px"
      />

      <SliderInput
        label="Menu Index"
        description="Z-index used to control menu stack level"
        value={menuIndex}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMenuIndex(Number(e.target.value))
        }
        min={10}
        max={100}
        step={10}
      />
    </div>
  );
};

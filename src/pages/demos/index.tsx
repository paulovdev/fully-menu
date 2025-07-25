import React, { useState } from "react";
import { Hamburger } from "@/components/hamburger";
import {
  MenuCircleAnimation,
  MenuSlideAnimations,
  MenuStairsAnimations,
} from "@/components/menus";

import { MenuCommonProperties } from "@/components/menu-common-props";
import { MenuSlideProperties } from "@/components/menu-slide-props";
import { MenuStairsProperties } from "@/components/menu-stairs-props";
import { HamburgerProperties } from "@/components/hamburguer-props";
import { SelectField } from "@/components/input-field";
import { MenuCircleProperties } from "@/components/menu-circle-props";

type MenuType = "slide" | "stairs" | "circle";

const Demos: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuType, setMenuType] = useState<MenuType>("slide");

  const [menuWidth, setMenuWidth] = useState<string>("100vw");
  const [menuHeight, setMenuHeight] = useState<string>("100vh");
  const [menuPadding, setMenuPadding] = useState<string>("10px");
  const [menuMargin, setMenuMargin] = useState<string>("0px 0px");
  const [menuBg, setMenuBg] = useState<string>("#000000");
  const [menuIndex, setMenuIndex] = useState<number>(90);

  const [durationInitial, setDurationInitial] = useState<number>(0.75);
  const [durationOnAnimate, setDurationOnAnimate] = useState<number>(0.75);
  const [durationOnExit, setDurationOnExit] = useState<number>(0.75);

  const [slideStyle, setSlideStyle] = useState<string>("SlideDown");

  const [stairsStyle, setStairsStyle] = useState<string>("StairsUp");
  const [stairsCount, setStairsCount] = useState<number>(6);
  const [delayInitial, setDelayInitial] = useState<number>(0.05);
  const [delayOnAnimate, setDelayOnAnimate] = useState<number>(0.05);
  const [delayOnExit, setDelayOnExit] = useState<number>(0.05);

  const [hamburgerColor, setHamburgerColor] = useState<string>("#010101");
  const [hamburgerOpenColor, setHamburgerOpenColor] =
    useState<string>("#ffffff");
  const [hamburgerSpacing, setHamburgerSpacing] = useState<number>(6);
  const [hamburgerBarWidth, setHamburgerBarWidth] = useState<number>(32);
  const [hamburgerBarHeight, setHamburgerBarHeight] = useState<number>(2);
  const [hamburgerIndex, setHamburgerIndex] = useState<number>(100);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  let MenuComponent: React.ComponentType<any> | null = null;
  let specificProps: Record<string, any> = {};

  switch (menuType) {
    case "slide":
      MenuComponent = MenuSlideAnimations;
      specificProps = {
        style: slideStyle,
        durationInitial,
        durationOnAnimate,
        durationOnExit,
      };
      break;
    case "stairs":
      MenuComponent = MenuStairsAnimations;
      specificProps = {
        style: stairsStyle,
        stairsCount,
        durationInitial,
        durationOnAnimate,
        durationOnExit,
        delayInitial,
        delayOnAnimate,
        delayOnExit,
      };
      break;
    case "circle":
      MenuComponent = MenuCircleAnimation;
      specificProps = {
        durationInitial,
        durationOnAnimate,
        durationOnExit,
      };
      break;
  }

  return (
    <>
      <div
        className="fixed left-0 p-5 w-full border-b border-border-100 flex justify-start items-center bg-white z-40"
        style={{ height: "50px" }}
      >
        <Hamburger
          isOpen={isOpen}
          toggle={toggleMenu}
          color={hamburgerColor}
          openColor={hamburgerOpenColor}
          spacing={hamburgerSpacing}
          width={hamburgerBarWidth}
          height={hamburgerBarHeight}
          index={hamburgerIndex}
        />
        <p className="ml-8 text-black-100 text-[.7rem] font-semibold font-chivo">
          <span className="text-[1rem]">←</span> TEST HERE
        </p>

        {MenuComponent && (
          <MenuComponent
            isOpen={isOpen}
            background={menuBg}
            padding={menuPadding}
            margin={menuMargin}
            height={menuHeight}
            width={menuWidth}
            index={menuIndex}
            {...specificProps}
          >
            <div className="relative size-full flex flex-col items-center justify-center">
              <h1 className="text-white-100 text-[1.75rem] font-semibold mb-8 ">
                {menuType.charAt(0).toUpperCase() + menuType.slice(1)} Menu
              </h1>
              <ul className="flex flex-col gap-4">
                <li className="text-[.9rem] text-white-100 font-semibold cursor-pointer hover:text-gray-400 transition">
                  Home
                </li>
                <li className="text-[.9rem] text-white-100 font-semibold cursor-pointer hover:text-gray-400 transition">
                  About
                </li>
                <li className="text-[.9rem] text-white-100 font-semibold cursor-pointer hover:text-gray-400 transition">
                  Contact
                </li>
                <li
                  className="text-[.9rem] text-white-100 font-semibold cursor-pointer hover:text-gray-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Close Menu
                </li>
              </ul>
            </div>
          </MenuComponent>
        )}
      </div>

      <div className="relative pt-[50px] w-full h-[calc(100%_-_50px)] bg-white-200">
        <div className="size-full relative p-4 flex items-start gap-4 max-lg:flex-col">
          <div className="w-full p-4 h-fit bg-white-400 rounded-[.5rem] flex flex-col items-start shadow-[1px_1px_3px_0px_rgba(0,_0,_0,_0.08)]">
            <h2 className="mb-6 text-black-100 text-[1.5rem] font-bold">
              Menu Type
            </h2>

            <SelectField
              label="Select Menu Type"
              description="Choose between Slide and Stairs menu animation types"
              value={menuType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setMenuType(e.target.value as MenuType)
              }
              options={[
                { label: "Slide", value: "slide" },
                { label: "Stairs", value: "stairs" },
                { label: "Circle (SVG Path)", value: "circle" },
              ]}
            />
          </div>

          <div className="w-full flex flex-col items-start">
            <MenuCommonProperties
              menuBg={menuBg}
              setMenuBg={setMenuBg}
              menuWidth={menuWidth}
              setMenuWidth={setMenuWidth}
              menuHeight={menuHeight}
              setMenuHeight={setMenuHeight}
              menuPadding={menuPadding}
              setMenuPadding={setMenuPadding}
              menuMargin={menuMargin}
              setMenuMargin={setMenuMargin}
              menuIndex={menuIndex}
              setMenuIndex={setMenuIndex}
            />
          </div>

          {menuType === "slide" && (
            <div className="w-full flex flex-col items-start">
              <MenuSlideProperties
                slideStyle={slideStyle}
                setSlideStyle={setSlideStyle}
                durationInitial={durationInitial}
                setDurationInitial={setDurationInitial}
                durationOnAnimate={durationOnAnimate}
                setDurationOnAnimate={setDurationOnAnimate}
                durationOnExit={durationOnExit}
                setDurationOnExit={setDurationOnExit}
              />
            </div>
          )}

          {menuType === "stairs" && (
            <div className="w-full flex flex-col items-start">
              <MenuStairsProperties
                stairsStyle={stairsStyle}
                setStairsStyle={setStairsStyle}
                stairsCount={stairsCount}
                setStairsCount={setStairsCount}
                delayInitial={delayInitial}
                setDelayInitial={setDelayInitial}
                delayOnAnimate={delayOnAnimate}
                setDelayOnAnimate={setDelayOnAnimate}
                delayOnExit={delayOnExit}
                setDelayOnExit={setDelayOnExit}
                durationInitial={durationInitial}
                setDurationInitial={setDurationInitial}
                durationOnAnimate={durationOnAnimate}
                setDurationOnAnimate={setDurationOnAnimate}
                durationOnExit={durationOnExit}
                setDurationOnExit={setDurationOnExit}
              />
            </div>
          )}

          {menuType === "circle" && (
            <div className="w-full flex flex-col items-start">
              <MenuCircleProperties
                durationInitial={durationInitial}
                setDurationInitial={setDurationInitial}
                durationOnAnimate={durationOnAnimate}
                setDurationOnAnimate={setDurationOnAnimate}
                durationOnExit={durationOnExit}
                setDurationOnExit={setDurationOnExit}
              />
            </div>
          )}

          <div className="w-full flex flex-col items-start gap-4">
            <HamburgerProperties
              hamburgerColor={hamburgerColor}
              setHamburgerColor={setHamburgerColor}
              hamburgerOpenColor={hamburgerOpenColor}
              setHamburgerOpenColor={setHamburgerOpenColor}
              hamburgerSpacing={hamburgerSpacing}
              setHamburgerSpacing={setHamburgerSpacing}
              hamburgerBarWidth={hamburgerBarWidth}
              setHamburgerBarWidth={setHamburgerBarWidth}
              hamburgerBarHeight={hamburgerBarHeight}
              setHamburgerBarHeight={setHamburgerBarHeight}
              hamburgerIndex={hamburgerIndex}
              setHamburgerIndex={setHamburgerIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demos;

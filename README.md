# @paulovdev/fully-menu

Animated menu with a hamburger toggle button — built with ReactJS, NextJS, Framer Motion & Tailwind.

---

## 🔗 Demo

You can see the demo live at: [https://fully-menu.vercel.app/](https://fully-menu.vercel.app/)

---

## 📦 Installation

To use this package, make sure your project has **Tailwind CSS** installed and properly configured, as the components rely on Tailwind utility classes for styling.

Use your favorite package manager to install:

```bash
npm install @paulovdev/fully-menu
# or
yarn add @paulovdev/fully-menu
```

## 🚀 Basic Usage

Import and use the Hamburger component together with one of the available menu animation components:

```bash
import React, { useState } from "react";
import {
  Hamburger,
  MenuStairsAnimations
  } from "@paulovdev/fully-menu";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
   <nav className="fixed top-0 left-0 p-5 w-full h-[50px] flex justify-start items-center bg-gray-100">
      <Hamburger
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        color="black"
        openColor="white"
        spacing={6}
        width={38}
        height={2}
      />
      <MenuStairsAnimations isOpen={isOpen} padding="10px">
        <div className="relative size-full flex flex-col items-center justify-center">
          <h1 className="text-white-100 text-[1.75rem] font-semibold  mb-8 ">
            Menu
          </h1>
          <ul className="flex flex-col gap-4">
            <li className="text-[.9rem] text-white-100 font-semibold cursor-pointer hover:text-gray-400 transition" onClick={toggleMenu}>
              Home
            </li>
            <li
              className="text-[.9rem] text-white-100 font-semibold cursor-pointer hover:text-gray-400 transition" onClick={toggleMenu}>
              About
            </li>
          </ul>
        </div>
      </MenuStairsAnimations>
    </nav>
  );
};

export default Example;
```

## 🎨 Props

Hamburger Component Props

| Prop        | Type     | Default   | Description                        |
| ----------- | -------- | --------- | ---------------------------------- |
| `isOpen`    | boolean  | —         | Whether the hamburger menu is open |
| `toggle`    | function | —         | Function to toggle menu open state |
| `color`     | string   | `#010101` | Color of the bars when closed      |
| `openColor` | string   | `#ffffff` | Color of the bars when open        |
| `spacing`   | number   | `6`       | Vertical spacing between bars      |
| `width`     | number   | `32`      | Width of each bar                  |
| `height`    | number   | `2`       | Height of each bar                 |
| `index`     | number   | `100`     | z-index of the hamburger button    |

## Menu Animation Components Props

The menu components (MenuSlideAnimations, MenuStairsAnimations, MenuCircleAnimation)
accept the following props:

| Prop Name    | Type    | Default      | Description                       |
| ------------ | ------- | ------------ | --------------------------------- |
| `isOpen`     | boolean | **required** | Controls whether menu is open     |
| `background` | string  | `#000000`    | Background color of the menu      |
| `width`      | string  | `100vw`      | Width of the menu container       |
| `height`     | string  | `100vh`      | Height of the menu container      |
| `padding`    | string  | `10px`       | Padding inside the menu container |
| `margin`     | string  | `0px 0px`    | Margin around the menu container  |
| `index`      | number  | `90`         | z-index for layering the menu     |

## Slide Menu Props (MenuSlideAnimations)

##

| Prop Name           | Type   | Default       | Description                                                       |
| ------------------- | ------ | ------------- | ----------------------------------------------------------------- |
| `style`             | string | `"SlideDown"` | Slide animation style (SlideDown, SlideUp, SlideLeft, SlideRight) |
| `durationInitial`   | number | `0.75`        | Duration for initial animation (menu entering)                    |
| `durationOnAnimate` | number | `0.75`        | Duration for animation when menu fully visible                    |
| `durationOnExit`    | number | `0.75`        | Duration for exit animation (menu closing)                        |

## Stairs Menu Props (MenuStairsAnimations)

##

| Prop Name           | Type   | Default      | Description                                   |
| ------------------- | ------ | ------------ | --------------------------------------------- |
| `style`             | string | `"StairsUp"` | Stairs animation style (StairsUp, StairsDown) |
| `stairsCount`       | number | `6`          | Number of stairs/steps to render              |
| `durationInitial`   | number | `0.75`       | Duration for initial animation                |
| `durationOnAnimate` | number | `0.75`       | Duration when menu fully visible              |
| `durationOnExit`    | number | `0.75`       | Duration for exit animation                   |
| `delayInitial`      | number | `0.05`       | Delay between animation steps on enter        |
| `delayOnAnimate`    | number | `0.05`       | Delay between animation steps when visible    |
| `delayOnExit`       | number | `0.05`       | Delay between animation steps on exit         |

## Circle Menu Props (MenuCircleAnimation)

##

| Prop Name           | Type   | Default | Description                      |
| ------------------- | ------ | ------- | -------------------------------- |
| `durationInitial`   | number | `0.75`  | Duration for initial animation   |
| `durationOnAnimate` | number | `0.75`  | Duration when menu fully visible |
| `durationOnExit`    | number | `0.75`  | Duration for exit animation      |

## ⚖️ License

[MIT](https://choosealicense.com/licenses/mit/)

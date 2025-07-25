import Link from "next/link";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const installCode = `npm install @paulovdev/menu-component
# or
yarn add @paulovdev/menu-component`;

const usageCode = `import React, { useState } from "react";
import {
  Hamburger,
  MenuStairsAnimations
} from "@paulovdev/menu-component";

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
            <li className="text-[.9rem] text-white-100 font-semibold cursor-pointer hover:text-gray-400 transition" onClick={toggleMenu}>
              About
            </li>
          </ul>
        </div>
      </MenuStairsAnimations>
    </nav>
  );
};

export default Example;`;

const Head = () => {
  return (
    <div className="max-w-[800px] w-full mx-auto flex flex-col items-start justify-between">
      <div className="w-full pt-[40px] p-3">
        <h2 className="text-black-100 mb-2 text-[2rem] font-[700] tracking-[-1px] leading-normal">
          @paulovdev/menu-component
        </h2>

        <p className=" text-black-100/75 mb-8 text-[1rem] font-[500] tracking-[-.5px] leading-normal">
          Animated menu with a hamburger toggle button — built with ReactJS,
          NextJS, Framer Motion & Tailwind.
        </p>

        <p className=" text-black-100 mb-1 text-[1.5rem] font-[700] tracking-[-.5px] leading-normal">
          Demo:
        </p>

        <Link
          href={"/demos"}
          className=" text-black-100/75 text-[1rem] font-[500] tracking-[-.5px] leading-normal underline hover:text-black-100 transition-colors duration-200"
        >
          Go to demo
        </Link>

        <p className="mt-8  text-black-100 mb-1 text-[1.5rem] font-[700] tracking-[-.5px] leading-normal">
          Installation:
        </p>
        <p className=" text-black-100/75 mb-1 text-[1rem] font-[500] tracking-[-.5px] leading-normal">
          To use this package, make sure your project has
          <span className="font-bold text-black-100"> Tailwind CSS </span>
          installed and properly configured, as the components rely on Tailwind
          utility classes for styling.
          <br />
          <br />
          Use your favorite package manager to install
          <code className="mx-2 text-black-200 font-semibold px-2 bg-white-200 rounded-[.25rem]">
            @paulovdev/menu-component
          </code>
          package:
        </p>
        <SyntaxHighlighter
          language="bash"
          style={oneDark}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
            marginBottom: "2rem",
            fontSize: "1rem",
          }}
        >
          {installCode}
        </SyntaxHighlighter>

        <p className=" text-black-100 mb-1 text-[1.5rem] font-[700] tracking-[-.5px] leading-normal">
          Basic usage:
        </p>
        <SyntaxHighlighter
          language="jsx"
          style={oneDark}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
            marginBottom: "2rem",
            fontSize: "1rem",
          }}
        >
          {usageCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-6 p-3">
        <p className="text-black-100 mb-4 text-[1rem] font-[500] tracking-[-.5px] leading-normal">
          By <span className="underline">paulovdev</span>. Source code on
          <span className="underline"> GitHub</span>. Licensed under MIT.
        </p>
      </div>
    </div>
  );
};
export default Head;

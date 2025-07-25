import React from "react";

type Option = {
  label: string;
  value: string | number;
};

export interface SelectFieldProps {
  label?: string;
  description?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  description,
  value,
  onChange,
  options,
}) => (
  <div className="w-full flex flex-col mb-6 relative">
    {label && (
      <label className="text-black-100 mb-1 text-[1rem] font-[600] tracking-[-.5px] leading-[1.2]">
        {label}
      </label>
    )}
    {description && (
      <span className="relative mb-2 text-black-100/75 text-[.8rem] font-semibold">
        {description}
      </span>
    )}

    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none w-full h-10 px-3 pr-10 text-[.9rem] font-[600] text-black-100/75 bg-white-300 rounded-[.5rem] outline-none transition-all"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2">
        <svg
          className="w-4 h-4 text-black-100/50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>
);

// -----------------------------------

export interface InputFieldProps {
  label: string;
  description?: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  description,
  type = "text",
  value,
  onChange,
  min,
  placeholder,
}) => (
  <div className="w-full flex flex-col mb-6">
    <label className="text-black-100 mb-1 text-[1rem] font-[600] tracking-[-.5px] leading-[1.2]">
      {label}
    </label>
    {description && (
      <span className="relative mb-2 text-black-100/75 text-[.8rem] font-semibold">
        {description}
      </span>
    )}
    <input
      type={type}
      min={min}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-10 px-3 text-[.9rem] font-[600] text-black-100/75 bg-white-300 rounded-[.5rem] outline-none transition-all"
    />
  </div>
);

// -----------------------------------

export interface ColorInputProps {
  label: string;
  description?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ColorInput: React.FC<ColorInputProps> = ({
  label,
  description,
  value,
  onChange,
}) => (
  <div className="w-full flex flex-col mb-6">
    <label className="text-black-100 mb-1 text-[1rem] font-[600] tracking-[-.5px] leading-[1.2]">
      {label}
    </label>
    {description && (
      <span className="relative mb-4 text-black-100/75 text-[.8rem] font-semibold">
        {description}
      </span>
    )}
    <div className="relative w-full flex items-center justify-between gap-2">
      <div className="absolute w-8 h-8 border border-border-100 rounded-full flex items-center justify-center overflow-hidden">
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="w-8 h-8 scale-150 cursor-pointer"
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            border: "none",
            padding: 0,
          }}
        />
      </div>

      <div className="w-full flex items-end justify-end">
        <span className="text-black-100 font-bold text-[.8rem]">{value}</span>
      </div>
    </div>
  </div>
);

// -----------------------------------

export interface SliderInputProps {
  label: string;
  description?: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  paramCode?: string;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  description,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 10,
  paramCode,
}) => (
  <div className="w-full flex flex-col mb-6">
    <label className="text-black-100 mb-1 text-[1rem] font-[600] tracking-[-.5px] leading-[1.2]">
      {label}
    </label>
    {description && (
      <span className="mb-2 text-black-100/75 text-[.8rem] font-semibold">
        {description}
      </span>
    )}
    <div className="w-full flex items-center justify-between gap-2">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-4 outline-none accent-black-100 rounded-lg cursor-pointer dark:bg-black-100"
      />
      <div className="flex items-end justify-end">
        <span className="text-black-100 font-bold text-[.8rem]">
          {value}
          {paramCode}
        </span>
      </div>
    </div>
  </div>
);

// -----------------------------------

export interface ToggleSwitchProps {
  label: string;
  leftLabel: string;
  rightLabel: string;
  value: string;
  onChange: (value: string) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  leftLabel,
  rightLabel,
  value,
  onChange,
}) => (
  <div className="flex flex-col mb-6">
    <label className="text-black-100 mb-1 text-[1rem] font-[600] tracking-[-.5px] leading-[1.2]">
      {label}
    </label>
    <div className="flex rounded-full bg-gray-200 p-1 w-max">
      <button
        className={`px-4 py-1 rounded-full font-semibold ${
          value === leftLabel ? "bg-white text-black" : "text-gray-500"
        }`}
        onClick={() => onChange(leftLabel)}
      >
        {leftLabel}
      </button>
      <button
        className={`px-4 py-1 rounded-full font-semibold ${
          value === rightLabel ? "bg-white text-black" : "text-gray-500"
        }`}
        onClick={() => onChange(rightLabel)}
      >
        {rightLabel}
      </button>
    </div>
  </div>
);

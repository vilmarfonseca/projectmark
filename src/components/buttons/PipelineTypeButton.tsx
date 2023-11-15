import clsx from "clsx";
import React from "react";

interface PipelineTypeButtonProps {
  id: string;
  checked: boolean;
  name: string;
  onClick?: () => void;
}

const PipelineTypeButton: React.FC<PipelineTypeButtonProps> = ({
  id,
  checked,
  name,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "relative cursor-pointer w-full z-20 flex items-center gap-3 bg-white px-4 py-3 rounded-lg max-w-[200px]",
        checked ? "border-cta border-2" : "border-light-gray border"
      )}
    >
      {checked && (
        <span className="absolute left-0 right-0 -bottom-[7px] rotate-45 z-10 mx-auto h-[10px] w-[10px] border-b-2 border-r-2 border-cta bg-white"></span>
      )}
      <input
        id={id}
        type="checkbox"
        value={name}
        checked={checked}
        onChange={() => {}}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
      />
      <label
        htmlFor={id}
        className="text-sm font-medium text-primary capitalize"
      >
        {name}
      </label>
    </div>
  );
};

export default PipelineTypeButton;

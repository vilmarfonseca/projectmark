import React from "react";

interface Props {
  children: React.ReactNode;
}

const StepCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white flex p-6 w-full min-h-full rounded-3xl justify-center items-center shadow-sm">
      {children}
    </div>
  );
};

export default StepCard;

import React from "react";
import Logo from "./Logo";
import StepNavigationButton from "./buttons/StepNavigationButton";

const Header: React.FC = () => {
  return (
    <div className="flex w-full justify-between items-center p-6 pb-0 relative">
      <Logo />
      <div className="flex gap-8 absolute left-0 right-0 mx-auto justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="py-3 px-5 border border-light-gray rounded-2xl text-white bg-primary">
            <h2 className="text-white text-sm">1</h2>
          </div>
          <h3 className="text-[10px] font-bold text-primary pt-2">
            Sales Pipeline Settings
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="py-3 px-5 border border-light-gray rounded-2xl text-white bg-white">
            <h2 className="text-primary text-sm">2</h2>
          </div>
          <h3 className="text-[10px] font-bold text-primary pt-2">
            Opportunity Settings
          </h3>
        </div>
      </div>
      <StepNavigationButton />
    </div>
  );
};

export default Header;

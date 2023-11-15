import Link from "next/link";
import React from "react";

const StepNavigationButton: React.FC = () => {
  return (
    <Link
      href="/"
      className="py-3 px-6 text-sm font-semibold text-white bg-cta rounded-full"
    >
      Next
    </Link>
  );
};

export default StepNavigationButton;

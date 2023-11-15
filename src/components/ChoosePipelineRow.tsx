"use client";
import PipelineTypeButton from "@/components/buttons/PipelineTypeButton";
import { GlobalContext } from "@/context/globalContext";
import { useContext, useState } from "react";

const ChoosePipelineRow = () => {
  const { globalState, dispatch } = useContext(GlobalContext);

  return (
    <div className="mt-6 flex flex-wrap md:flex-nowrap gap-4 w-full justify-center">
      {globalState.pipelineTypes
        .sort((a, b) => a.order - b.order)
        .map((option) => (
          <PipelineTypeButton
            key={option.id}
            id={option.id}
            checked={globalState.pipelineType === option.type}
            name={option.type}
            onClick={() =>
              dispatch({ type: "SET_PIPELINE_TYPE", payload: option.type })
            }
          />
        ))}
    </div>
  );
};

export default ChoosePipelineRow;

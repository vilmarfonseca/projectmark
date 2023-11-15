"use client";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";

const PipelinesRow = () => {
  const { globalState } = useContext(GlobalContext);
  const selectedPipelineType = globalState.pipelineTypes.find(
    (item) => item.type === globalState.pipelineType
  );

  return (
    <div className="flex w-full pt-20 pb-10 gap-4 justify-center flex-wrap lg:flex-nowrap">
      {selectedPipelineType?.items.map((option) => {
        const pipeline = globalState.pipelines.find(
          (item) => item.name === option
        );
        return (
          <div
            key={pipeline?.id}
            className={`p-4 px-0 rounded-xl bg-${pipeline?.color} grow flex-1 min-w-[190px] max-w-[250px] h-[60vh] bg-gradient-to-b from-transparent via-transparent to-white`}
          >
            <div className={`uppercase font-bold px-4`}>
              {pipeline?.displayName}
            </div>
            <div className="relative w-full mt-2 h-5 px-4">
              <div
                className={`bg-${pipeline?.color}-dark absolute z-20 h-5 w-[20%] rounded-full`}
              ></div>
              <div
                className={`bg-${pipeline?.color}-medium absolute z-10 h-5 w-[60%] rounded-full`}
              ></div>
            </div>
            <div
              className={`h-[20vh] mx-2 border rounded-lg mt-4 border-${pipeline?.color}-dark`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default PipelinesRow;

"use client";
import PipelineTypeButton from "@/components/buttons/PipelineTypeButton";
import { useState } from "react";

const pipelineOptions = [
  { type: "basic", order: 1, id: "basicType" },
  { type: "advanced", order: 2, id: "advancedType" },
  { type: "expert", order: 3, id: "expertType" },
  { type: "custom", order: 4, id: "customType" },
];

const ChoosePipelineRow = () => {
  const [pipelineType, setPipelineType] = useState<string | undefined>(
    pipelineOptions[0].type
  );

  return (
    <div className="mt-6 flex gap-4 w-full justify-center">
      {pipelineOptions
        .sort((a, b) => a.order - b.order)
        .map((option) => (
          <PipelineTypeButton
            key={option.id}
            id={option.id}
            checked={pipelineType === option.type}
            name={option.type}
            onClick={() =>
              setPipelineType(
                pipelineOptions.find((item) => option.type === item.type)?.type
              )
            }
          />
        ))}
    </div>
  );
};

export default ChoosePipelineRow;

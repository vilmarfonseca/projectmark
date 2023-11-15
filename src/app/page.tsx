import ChoosePipelineRow from "@/components/ChoosePipelineRow";
import PipelinesRow from "@/components/PipelinesRow";

export default function Home() {
  return (
    <div className="py-6 w-full justify-center flex flex-col items-center">
      <h2 className="text-primary font-bold text-2xl text-center">
        Please select the type of sales pipeline that best fits to you company
      </h2>
      <ChoosePipelineRow />
      <PipelinesRow />
    </div>
  );
}

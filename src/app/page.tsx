import ChoosePipelineRow from "@/components/ChoosePipelineRow";

export default function Home() {
  return (
    <div className="py-6">
      <h2 className="text-primary font-bold text-2xl">
        Please select the type of sales pipeline that best fits to you company
      </h2>
      <ChoosePipelineRow />
    </div>
  );
}

const pipelineOptions = [
  {
    id: 1,
    name: "lead",
    displayName: "Lead",
    color: "lead",
  },
  {
    id: 2,
    name: "in-progress",
    displayName: "RFP in Progress",
    color: "in-progress",
  },
  {
    id: 3,
    name: "submitted",
    displayName: "Submitted",
    color: "submitted",
  },
  {
    id: 4,
    name: "won",
    displayName: "Won",
    color: "won",
  },
  {
    id: 5,
    name: "lost",
    displayName: "Lost",
    color: "lost",
  },
  {
    id: 6,
    name: "closed",
    displayName: "Closed",
    color: "closed",
  },
];

const PipelinesRow = () => {
  return (
    <div className="flex w-full pt-20 pb-10 gap-4 justify-center flex-wrap lg:flex-nowrap">
      {pipelineOptions.map((option) => (
        <div
          key={option.id}
          className={`p-4 px-0 rounded-xl bg-${option.color} grow flex-1 min-w-[190px] max-w-[250px] h-[60vh] bg-gradient-to-b from-transparent via-transparent to-white`}
        >
          <div className={`uppercase font-bold px-4`}>{option.displayName}</div>
          <div className="relative w-full mt-2 h-5 px-4">
            <div
              className={`bg-${option.color}-dark absolute z-20 h-5 w-[20%] rounded-full`}
            ></div>
            <div
              className={`bg-${option.color}-medium absolute z-10 h-5 w-[60%] rounded-full`}
            ></div>
          </div>
          <div className={`h-[20vh] mx-2 border rounded-lg mt-4 border-${option.color}-dark`}></div>
        </div>
      ))}
    </div>
  );
};

export default PipelinesRow;

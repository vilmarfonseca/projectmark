type TPipelineType = "basic" | "advanced" | "expert" | "custom";

type TPipelineItem = {
  id: number;
  name: string;
  displayName: string;
  color: string;
};

type TPipelineTypes = {
  id: string;
  order: number;
  type: TPipelineType;
  items: TPipelineItems;
}[];

type TPipelineItems = string[]

type TPipelines = TPipelineItem[];

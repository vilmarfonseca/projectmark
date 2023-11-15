// Selected Pipeline Type
export type PipelineTypeActionType = {
  type: "SET_PIPELINE_TYPE";
  payload: TPipelineType;
};

export const PipelineTypeReducer = (
  state: TPipelineType,
  action: PipelineTypeActionType
) => {
  switch (action.type) {
    case "SET_PIPELINE_TYPE":
      return action.payload;
    default:
      return state;
  }
};
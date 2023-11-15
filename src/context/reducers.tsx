// Selected Pipeline Type
export type PipelineTypeActionType = {
  type: "SET_PIPELINE_TYPE";
  payload: TPipelineType;
};

export const pipelineTypeReducer = (
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

// Pipelines
export type PipelinesActionType = {
  type: "SAVE_INSTANCE_DATA";
  payload: TPipelines;
};

export const PipelinesReducer = (
  state: TPipelines,
  action: PipelinesActionType
) => {
  switch (action.type) {
    case "SAVE_INSTANCE_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

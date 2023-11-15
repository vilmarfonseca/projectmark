"use client";
import React, { Dispatch, createContext, useReducer } from "react";
import {
  PipelineTypeActionType,
  PipelinesActionType,
  PipelinesReducer,
  pipelineTypeReducer,
} from "./reducers";

type InitialStateType = {
  pipelineType: TPipelineType;
  pipelineTypes: TPipelineTypes;
  pipelines: TPipelineItem[];
};

const initialState: InitialStateType = {
  pipelineType: "basic",
  pipelineTypes: [
    {
      type: "basic",
      order: 1,
      id: "basicType",
      items: ["lead", "won", "lost"],
    },
    {
      type: "advanced",
      order: 2,
      id: "advancedType",
      items: ["lead", "in-progress", "won", "lost", "closed"],
    },
    {
      type: "expert",
      order: 3,
      id: "expertType",
      items: ["lead", "in-progress", "submitted", "won", "lost", "closed"],
    },
    {
      type: "custom",
      order: 4,
      id: "customType",
      items: ["lead", "in-progress", "submitted", "won", "lost", "closed"],
    },
  ],
  pipelines: [
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
  ],
};

const mainReducer = (
  state: InitialStateType,
  action: PipelinesActionType | PipelineTypeActionType
): InitialStateType => {
  return {
    pipelineType: pipelineTypeReducer(
      state.pipelineType,
      action as PipelineTypeActionType
    ),
    pipelineTypes: state.pipelineTypes,
    pipelines: PipelinesReducer(
      state.pipelines,
      action as PipelinesActionType
    ) as TPipelines,
  };
};

export const GlobalContext = createContext<{
  globalState: InitialStateType;
  dispatch: Dispatch<PipelinesActionType | PipelineTypeActionType>;
}>({
  globalState: initialState,
  dispatch: () => null,
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [globalState, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

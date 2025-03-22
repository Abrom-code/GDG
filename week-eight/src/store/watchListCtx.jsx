import { createContext, useReducer, useState } from "react";

export const WatchListCtx = createContext({
  watchLists: [],
  addToWatchLists: () => {},
  removeFromWatchList: () => {},
});

const handleWatchList = (state, action) => {
  if (action.type === "ADD_MOVIE") {
    const newItem = action.payload;
    const isExisted = state.watchLists.find((lists) => lists.id === newItem.id);

    if (!isExisted) {
      return {
        ...state,
        watchLists: [...state.watchLists, newItem],
      };
    }
    return state;
  }
  if (action.type === "REMOVE_MOVIE") {
    const newItem = action.payload;

    return {
      ...state,
      watchLists: state.watchLists.filter((list) => list.id !== newItem.id),
    };
  }
};

export default function WatchListProvider({ children }) {
  const [watchListState, watchListDispatch] = useReducer(handleWatchList, {
    watchLists: [],
  });

  const addToWatchLists = (movie) => {
    watchListDispatch({
      type: "ADD_MOVIE",
      payload: movie,
    });
  };
  const removeFromWatchList = (movie) => {
    watchListDispatch({
      type: "REMOVE_MOVIE",
      payload: movie,
    });
  };

  const ctxValue = {
    watchLists: watchListState.watchLists,
    addToWatchLists,
    removeFromWatchList,
  };
  return (
    <WatchListCtx.Provider value={ctxValue}>{children}</WatchListCtx.Provider>
  );
}

import { useState, useEffect, useCallback, useMemo, useReducer } from "react";

const initialState = { text: "", length: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "SET_TEXT":
      return {
        text: action.payload,
        length: action.payload.length,
      };
    case "CLEAR_TEXT":
      return initialState;
    default:
      return state;
  }
}

export function useCharacterCount(limit) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [warning, setWarning] = useState(false);

  const handleTextChange = useCallback(
    (text) => {
      if (text.length <= limit) {
        dispatch({ type: "SET_TEXT", payload: text });
      }
    },
    [limit]
  );

  const progress = useMemo(
    () => (state.length / limit) * 100,
    [state.length, limit]
  );

  useEffect(() => {
    setWarning(state.length >= limit * 0.9);
  }, [state.length, limit]);

  return { state, handleTextChange, warning, progress };
}

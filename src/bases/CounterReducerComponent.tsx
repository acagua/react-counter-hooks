import { useReducer } from "react";

export const CounterReducerComponent = () => {
  interface CounterState {
    counter: number;
    previous: number;
    changes: number;
  }

  const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
  };

  // action =
  // {
  //   type:'name',
  //   payload:{}
  // }
  type CounterAction =
    | { type: "increaseBy"; payload: { value: number } }
    | { type: "reset" };

  const counterReducer = (
    state: CounterState,
    action: CounterAction
  ): CounterState => {
    //reduce = recibe un estado inicial/estado anterior y una acción para generar un nuevo estado
    const { counter, changes } = state;
    switch (action.type) {
      case "increaseBy":
        return {
          counter: counter + action.payload.value,
          changes: changes + 1,
          previous: counter,
        };
      case "reset":
        return INITIAL_STATE;

      default:
        return state;
    }
  };
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleClick = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <>
      <h1>Counter Reducer: {counterState.counter}</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

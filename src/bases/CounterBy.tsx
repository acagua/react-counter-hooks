import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (quantity: number) => {
    // setCounter((prev: number) => prev + 1);
    setCounterState(({ counter, clicks }) => ({
      counter: counter + quantity,
      clicks: clicks + 1,
    }));
  };
  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <p>clicks:{clicks}</p>
    </>
  );
};
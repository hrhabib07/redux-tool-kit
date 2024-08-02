import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterView;

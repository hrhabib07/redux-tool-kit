import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const amount = 5;
  return (
    <div className="max-w-7xl mx-auto flex justify-center h-screen items-center">
      <div>
        <h2 className="text-5xl font-bold text-green-900">My counter app</h2>
        <h1 className="text-4xl font-semibold my-8">
          Counter : <span className="text-red-900">{counter}</span>{" "}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="p-2 bg-green-700 text-white rounded-md  mr-8 text-lg uppercase"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="p-2 bg-red-700 text-white rounded-md  mr-8 text-lg uppercase"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="p-2 bg-green-700 text-white rounded-md  mr-8 text-lg uppercase"
            onClick={() => dispatch(increaseByAmount(amount))}
          >
            Increase by {amount}
          </button>
          <button
            className="p-2 bg-red-700 text-white rounded-md  mr-8 text-lg uppercase"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterView;

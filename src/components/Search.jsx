import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/slices/counter/counterSlice";
import "../assets/styles/components/Search.scss";

const Search = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <section className="main">
      <h2 className="main__title">{counter}</h2>
      <div className="espacio">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment + 2
        </button>
      </div>
      <input type="text" className="input_search" placeholder="Buscar..." />
    </section>
  );
};

export default Search;

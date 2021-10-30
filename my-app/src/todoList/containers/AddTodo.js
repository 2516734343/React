import React from "react";
import { connect } from 'react-redux';
import { addTodo } from "../store/action";


let AddTodo = ({ dispatch }) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = '';

  }
  return <div>
    <form onSubmit={(e) => onSubmit(e)}>
      <input ref={node => input = node} />
      <button type="submit">
        add todo
      </button>
    </form>
  </div>
}

export default connect()(AddTodo)
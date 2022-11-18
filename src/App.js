import { addTodo } from "./store/todo";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleSubmit = () => {
    dispatch(
      addTodo({
        label: "Learn redux today !",
      })
    );
  };

  return (
    <Fragment>
      <button onClick={handleSubmit}>add</button>
      <pre>{JSON.stringify(todos, null, 4)}</pre>
    </Fragment>
  );
}

export default App;

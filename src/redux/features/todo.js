const initialState = {
  todo: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/fetch/fulfiled":
      return {
        ...state,
        todo: action.payload,
      };
    case "todo/add/fulfiled":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "todo/delete/fulfiled":
      return {
        ...state,
        todo: state.todo.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const fetchTodo = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "todo/fetch/pending" });
      const response = await fetch("http://localhost:8000/todo");
      const todo = await response.json();
      dispatch({ type: "todo/fetch/fulfiled", payload: todo });
    } catch (error) {
      dispatch({ type: "todo/fetch/rejected", payload: error.message });
    }
  };
};

export const addTodo = (value) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "todo/add/pending" });
      const response = await fetch("http://localhost:8000/todo/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: value,
        }),
      });
      const todo = await response.json();
      dispatch({ type: "todo/add/fulfiled", payload: todo });
    } catch (error) {
      dispatch({ type: "todo/add/rejected", payload: error.message });
    }
  };
};

export const deleteTodo = (_id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "todo/delete/pending" });
      const response = await fetch(`http://localhost:8000/todo/delete/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: _id,
        }),
      });
      const id = await response.json();
      dispatch({ type: "todo/delete/fulfiled", payload: id });
    } catch (error) {
      dispatch({ type: "todo/delete/rejected", payload: error.message });
    }
  };
};

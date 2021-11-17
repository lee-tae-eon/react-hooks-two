import { v4 as uuidv4 } from "uuid";

export const initialState = {
  toDos: [],
  completed: [],
};

export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payLoad, id: uuidv4() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => action.payLoad !== toDo.id),
      };
    case COMPLETE:
      const target = state.toDos.find((toDo) => action.payLoad !== toDo.id);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => action.payLoad !== toDo.id),
        completed: [...state.completed, { ...target }],
      };
    default:
      return;
  }
}

export default reducer;

import { v4 as uuidv4 } from "uuid";
import { ADD, COMPLETE, DEL, UNCOMPLETE } from "./actions";

export const initialState = {
  toDos: [],
  completed: [],
};

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
      const target = state.toDos.find((toDo) => action.payLoad === toDo.id);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => action.payLoad !== toDo.id),
        completed: [...state.completed, { ...target }],
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (toDo) => action.payLoad === toDo.id
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => action.payLoad !== toDo.id),
        toDos: [...state.toDos, { ...aTarget }],
      };
    default:
      return;
  }
}

export default reducer;

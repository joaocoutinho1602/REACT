import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import { createCharacter } from "./helpers";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, createCharacter(action.id)];

    case REMOVE_CHARACTER:
      console.log(state);
      const res = state.filter((i) => i.id !== action.id);
      console.log(state);
      console.log(res);
      return res;

    default:
      return state;
  }
}

export default heroes;

import { combineReducers } from "redux";
import { SET_RECIPES, FAVORITE_RECIPE } from "../actions";

function recipes(state = [], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

function favoriteRecipes(state = [], action) {
  switch (action.type) {
    case FAVORITE_RECIPE:
      return state.find((recipe) => recipe.href === action.recipe.href)
        ? state.filter((recipe) => recipe !== action.recipe)
        : [...state, action.recipe];

    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;

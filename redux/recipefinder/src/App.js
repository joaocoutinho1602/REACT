import React from "react";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

import SearchRecipes from "./components/SearchRecipes";
import RecipeList from "./components/RecipeList";
import { toast } from "react-toastify";

toast.configure();

function App() {
  return (
    <div>
      <h2>Recipe Finder</h2>
      <SearchRecipes />
      <RecipeList />
    </div>
  );
}

export default App;

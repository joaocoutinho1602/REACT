import React, { useState, useEffect } from "react";
import http from "../services/httpService";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setRecipes, favoriteRecipe } from "../actions";

function SearchRecipes(props) {
  const [ingredients, setIngredients] = useState("");
  const [dish, setDish] = useState("");

  async function search() {
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    const response = await http.get(url);
    props.setRecipes(response.data.results);
    response.data.results.map((item) => props.favoriteRecipe(item));
  }

  return (
    <form inline="true">
      <div className="form-group">
        <label htmlFor="ingredientInput">Ingredients</label>
        <input
          type="text"
          className="form-control"
          id="ingredientInput"
          placeholder="garlic, chicken..."
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dishInput">Dish</label>
        <input
          type="text"
          className="form-control"
          id="dishInput"
          placeholder="adobo..."
          onChange={(e) => setDish(e.target.value)}
        />
      </div>
      <div className="btn btn-primary" onClick={search}>
        Submit
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return state;
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setRecipes }, dispatch);
// }

export default connect(mapStateToProps, { setRecipes, favoriteRecipe })(
  SearchRecipes
);

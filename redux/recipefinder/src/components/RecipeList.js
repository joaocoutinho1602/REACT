import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";

function RecipeList(props) {
  return (
    <div>
      <h4 className="link">
        <Link to="/favorites">Favorites</Link>
      </h4>
      {props.recipes.map((recipe, index) => {
        return (
          <RecipeItem
            key={index}
            recipe={recipe}
            favoriteButton={true}
            favoriteFilled={props.favoriteRecipes.find(
              (item) => item === recipe
            )}
          />
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

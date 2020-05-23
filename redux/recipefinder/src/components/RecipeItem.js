import React, { useState } from "react";
import { connect } from "react-redux";
import { favoriteRecipe } from "../actions";
import { toast } from "react-toastify";

function RecipeItem(props) {
  const { recipe, favoriteRecipe, favoriteRecipes, favoriteFilled } = props;

  function doFavorite(recipe) {
    favoriteRecipe(recipe);
    toast.success(
      `${recipe.title} ${
        favoriteRecipes.find((item) => item === recipe)
          ? "was removed from "
          : "was added to "
      } your favourite recipes!`
    );
  }

  return (
    <div className="recipe-item">
      {props.favoriteButton ? (
        favoriteRecipes.find((item) => item === recipe) ? (
          <div className="star" onClick={() => doFavorite(recipe)}>
            &#9733;
          </div>
        ) : (
          <div className="star" onClick={() => doFavorite(recipe)}>
            &#9734;
          </div>
        )
      ) : null}

      <div className="recipe-text">
        <a href={recipe.href}>
          <h4>{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>
      </div>
      <img
        className="recipe-image"
        src={recipe.thumbnail}
        alt={recipe.thumbnail}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { favoriteRecipe })(RecipeItem);

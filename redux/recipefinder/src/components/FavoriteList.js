import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import { favoriteRecipe } from "../actions";

function FavoriteList(props) {
  return (
    <div>
      <h4 className="link">
        <Link to="/">Home</Link>
      </h4>
      <h4>Favorite List</h4>
      {props.favoriteRecipes.map((recipe, index) => {
        return (
          <div className="dlt-favorite" key={index}>
            <div
              className="btn btn-danger btn-sm"
              onClick={() => props.favoriteRecipe(recipe)}
            >
              DELETE
            </div>
            <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ favoriteRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);

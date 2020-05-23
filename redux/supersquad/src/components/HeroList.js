import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeCharacterById } from "../actions";

function HeroList(props) {
  //   console.log("heroList props log", props);
  return (
    <div>
      <h4>Heroes</h4>
      <ul className="list-group">
        {props.heroes.map((hero) => {
          return (
            <li className="list-group-item" key={hero.id}>
              <div className="list-item">{hero.name}</div>
              <div
                className="list-item right-button"
                onClick={() => props.removeCharacterById(hero.id)}
              >
                x
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { heroes: state.heroes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);

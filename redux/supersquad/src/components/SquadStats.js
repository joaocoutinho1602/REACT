import React from "react";
import { connect } from "react-redux";

function SquadStats(props) {
  function getAttr(attr) {
    let res = 0;
    props.heroes.forEach((element) => {
      res += element[attr];
    });
    return res;
  }

  return (
    <div>
      <h4>Squad Stats</h4>

      <ul className="list-group">
        <li key="strength" className="list-group-item">
          <b>Overall Strength: {getAttr("strength")} </b>
        </li>
        <li key="intelligence" className="list-group-item">
          <b>Overall Intelligence: {getAttr("intelligence")} </b>
        </li>
        <li key="speed" className="list-group-item">
          <b>Overall Speed: {getAttr("speed")} </b>
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { heroes: state.heroes };
}

export default connect(mapStateToProps, null)(SquadStats);

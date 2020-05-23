import React from "react";
import { connect } from "react-redux";

function MyMemes(props) {
  return (
    <div>
      {props.myMemes.map((meme, index) => {
        return (
          <img
            key={index}
            src={meme.data.url}
            alt="my-meme"
            className="my-meme-img"
          />
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return { myMemes: state.myMemes };
}

export default connect(mapStateToProps, null)(MyMemes);

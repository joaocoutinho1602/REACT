import React, { useState } from "react";
import { connect } from "react-redux";

import { createMeme } from "../actions";

function MemeItem(props) {
  const { meme } = props;

  const [hovered, setHovered] = useState(false);

  function postMeme() {
    const { topText, bottomText, meme, createMeme } = props;
    const memeObj = {
      template_id: meme.id,
      text0: topText,
      text1: bottomText,
    };
    createMeme(memeObj);
  }

  return (
    <div
      className="meme-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => postMeme()}
    >
      <img
        className={hovered ? "meme-img darken-img" : "meme-img lighten-image"}
        src={meme.url}
        alt={meme.url}
      />
      <p className={hovered ? "meme-txt" : "no-txt"}>{props.meme.name}</p>
    </div>
  );
}

export default connect(null, { createMeme })(MemeItem);

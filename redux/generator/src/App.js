import React, { useState, useEffect } from "react";
import "./App.css";

import MemeItem from "./components/MemeItem";

import { connect } from "react-redux";
import MyMemes from "./components/MyMemes";

const RENDER_LIMIT = 10;

function App(props) {
  const [limit, setLimit] = useState(0);

  useEffect(() => setLimit(RENDER_LIMIT), []);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  return (
    <div>
      <h2>Welcome to the MEME GENERATOR</h2>
      <MyMemes />
      <h4>
        <i>Write some text</i>
      </h4>
      <form>
        <div className="form-group">
          <label htmlFor="top">Top Text</label>
          <input
            className="form-control"
            type="text"
            id="top"
            onChange={(e) => setTopText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bottom">Bottom Text</label>
          <input
            className="form-control"
            type="text"
            id="bottom"
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>
      </form>
      {props.memes.slice(0, limit).map((meme, index) => {
        return (
          <MemeItem
            key={index}
            meme={meme}
            topText={topText}
            bottomText={bottomText}
          />
        );
      })}
      <div
        className="meme-button"
        onClick={() => setLimit(limit + RENDER_LIMIT)}
      >
        Load more memes
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);

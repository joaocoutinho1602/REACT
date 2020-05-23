import { useContext } from "react";
import createDataContext from "../context/createDataContext";
import { Context as BoardContext } from "./BoardContext";

const {
  addPost: boardAddPost,
  removePost: boardRemovePost,
  editPost: boardEditPost,
} = useContext(BoardContext);

function postReducer(
  state,
  {
    type,
    payload: { boardID = null, title = null, content = null, postID = null },
  }
) {
  switch (type) {
    case "create":
      boardAddPost(boardID, { title, content });
      break;
    case "delete":
      boardRemovePost(boardID, postID);
      break;
    case "edit":
      boardEditPost(boardID, postID, { title, content });
      break;
    default:
      break;
  }
}

function createPost(dispatch) {
  return (title, content, boardID, callback = null) => {
    dispatch({ type: "create", payload: { title, content, boardID } });
    if (callback) callback();
  };
}

function deletePost(dispatch) {
  return (postID, boardID, callback = null) => {
    dispatch({ type: "delete", payload: { postID, boardID } });
    if (callback) callback();
  };
}

function editPost(dispatch) {
  return (boardID, postID, title, content, callback = null) => {
    dispatch({ type: "edit", payload: { postID, title, content, boardID } });
    if (callback) callback();
  };
}

export const { Context, Provider } = createDataContext(
  postReducer,
  {
    createPost,
    deletePost,
    editPost,
  },
  null
);

import createDataContext from "../context/createDataContext";
import server from "../api/server";

function boardReducer(
  { totalBoards, totalPosts, boards },
  {
    type,
    payload: {
      boardID = {},
      name = {},
      description = {},
      postID = {},
      post: { title = {}, content = {} } = {},
    },
  }
) {
  switch (type) {
    case "createBoard":
      return {
        totalBoards: totalBoards + 1,
        totalPosts,
        boards: [
          ...boards,
          {
            id: (totalBoards + 1).toString(),
            name,
            description,
            posts: [],
          },
        ],
      };
    case "editBoard":
      return boards.map((board) => {
        return board.id === payload.id ? payload : board;
      });
    case "deleteBoard":
      return {
        totalBoards,
        totalPosts,
        boards: boards.filter((board) => board.id !== payload.id),
      };
    case "getBoards":
      return payload;
    case "addPost":
      return {
        totalBoards,
        totalPosts: totalPosts + 1,
        boards: boards.map((board) => {
          return parseInt(board.id) === boardID
            ? {
                id: board.id,
                name: board.name,
                description: board.description,
                posts: [...board.posts, { id: totalPosts + 1, title, content }],
              }
            : board;
        }),
      };
    case "editPost":
      return {
        totalBoards,
        totalPosts,
        boards: boards.map((board) => {
          return board.id === boardID
            ? {
                board: board.posts.map((item) => {
                  return item.id === postID ? post : item;
                }),
              }
            : board;
        }),
      };
    case "removePost":
      return {
        totalBoards,
        totalPosts,
        boards: boards.map((board) => {
          return board.id === boardID
            ? board.posts.filter((item) => item.id !== postID)
            : board;
        }),
      };
    default:
      return { totalBoards, totalPosts, boards };
  }
}

function getBoards(dispatch) {
  return async () => {
    const response = await server.get("/boards");

    dispatch({ type: "getBoards", payload: response.data });
  };
}

function createBoard(dispatch) {
  return async (name, description, callback = null) => {
    // dispatch({ type: "createBoard", payload: { name, description } });
    //if (callback) callback();

    try {
      const response = await server.post("/boards", { name, description });
    } catch (err) {
      console.log(err);
    }
  };
}

function editBoard(dispatch) {
  return (boardID, name, description, callback = null) => {
    dispatch({ type: "editBoard", payload: { boardID, name, description } });
    if (callback) callback();
  };
}

function deleteBoard(dispatch) {
  return (postID, callback = null) => {
    dispatch({ type: "deleteBoard", payload: { postID } });
    if (callback) callback();
  };
}

function addPost(dispatch) {
  return (boardID, post, callback = null) => {
    dispatch({ type: "addPost", payload: { post, boardID } });
    if (callback) callback();
  };
}

function editPost(dispatch) {
  return (boardID, postID, post, callback = null) => {
    dispatch({ type: "editPost", payload: { boardID, postID, post } });
    if (callback) callback();
  };
}

function removePost(dispatch) {
  return (boardID, postID, callback = null) => {
    dispatch({ type: "removePost", payload: { boardID, postID } });
    if (callback) callback();
  };
}

export const { Context, Provider } = createDataContext(
  boardReducer,
  {
    createBoard,
    editBoard,
    deleteBoard,
    getBoards,
    addPost,
    editPost,
    removePost,
  },
  { totalBoards: 0, totalPosts: 0, boards: Array() }
);

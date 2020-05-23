import createDataContext from "./createDataContext";
import server from "../api/mongodb";

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: payload.title,
          body: payload.body,
        },
      ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== payload.id);
    case "edit_blogpost":
      return state.map((post) => {
        return post.id === payload.id ? payload : post;
      });
    case "get_blogposts":
      return payload;
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await server.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, body, callback) => {
    // dispatch({ type: "add_blogpost", payload: { title, body } });
    // if (callback) callback();

    await server.post("/blogposts", { title, body });
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    // dispatch({ type: "delete_blogpost", payload: { id } });

    await server.delete(`/blogposts/%{id}`);
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, body, callback) => {
    // dispatch({ type: "edit_blogpost", payload: { id, title, body } });
    // if (callback) callback();

    await server.put(`/blogposts/${id}`, { title, body });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPosts,
  },
  []
);

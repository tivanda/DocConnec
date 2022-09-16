import * as PostApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);

    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const createComment = (postId, userId, text) => async (dispatch) => {
  try {
    const { data } = await PostApi.createComment(postId, userId, text);

    dispatch({ type: "CREATE COMENT", data: data, postId: postId });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const deleteComment = (postId, userId) => async (dispatch) => {
  try {
    const { data } = await PostApi.deleteComment(postId, userId);

    dispatch({ type: "DELETE COMENT", data: data, postId: postId });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const deletePost = (postId, userId) => async (dispatch) => {
  try {
    const { data } = await PostApi.deletePost(postId, userId);

    dispatch({ type: "DELETE POST", data: data, postId });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

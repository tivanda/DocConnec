const postReducer = (
  state = { posts: [], loading: true, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "RETREIVING_START":
      return { ...state, error: false, loading: true };
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        error: false,
        uploading: false,
      };
    case "RETREIVING_SUCCESS":
      return {
        ...state,
        posts: action.data,
        loading: false,
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "CREATE COMENT":
      state.posts.every((value) => {
        if (value._id === action.postId) {
          value.commentList.push(action.data.data);
          return false;
        }
        return true;
      });

      return { ...state, loading: false };
    case "DELETE COMENT":
      state.posts.every((value) => {
        if (value._id === action.postId) {
          value.commentList = action.data.data;
          return false;
        }
        return true;
      });

      return { ...state, loading: false };
    default:
      return state;
  }
};

export default postReducer;

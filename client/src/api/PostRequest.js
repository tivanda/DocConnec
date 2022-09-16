import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });

export const createComment = (postId, userId, text) =>
  API.post(`/post/${postId}/${userId}/comment`, { text: text });

export const deleteComment = (postId, commentId) =>
  API.delete(`/post/${postId}/${commentId}`);

//proba
export const deletePost = (postId) => API.delete(`/post/${postId}`);

import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  getTimelinePosts,
  updatePost,
  createComment,
  deleteComment,
} from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);
router.post("/:id/:userId/comment", createComment);
router.delete("/:id/:userId", deleteComment);

export default router;

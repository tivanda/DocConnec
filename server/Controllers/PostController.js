import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

// For generating comment ID
import uuid4 from "uuid4";


// Creat new Post
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a post
export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

//zadnja probaa

// Update a post

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Forbiden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deletet sucessfully");
    } else {
      res.status(403).json("Forbiden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Like and dislike

export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//comment
export const createComment = async (req, res) => {
  const postId = req.params.id;
  const userId = req.params.userId;

  const comment = {
    id: uuid4(),
    createdBy: "",
    userImage: "",
    text: req.body.text,
  };

  try {
    const post = await PostModel.findById(postId);
    const user = await UserModel.findById(userId);

    comment.createdBy = user.firstname + " " + user.lastname;
    comment.userImage = user.profilePicture;

    await post.updateOne({ $push: { commentList: comment } });

    console.log("COMENT CREATED >> ", post.commentList)
    res.status(200).json({ statusText: "Comment created", data: comment });

  } catch (error) {
    res.status(500).json(error);
  }
};

// delete comment
export const deleteComment = async (req, res) => {
  const postId = req.params.id;
  const commentId = req.params.userId;

  try {
    const post = await PostModel.findById(postId);

    await post.updateOne(
      { $pull: { 'commentList': { id: commentId } } }
    );

    const updatedPost = await PostModel.findById(postId);

    res.status(200).json({ statusText: "Comment created", data: updatedPost.commentList });

  } catch (error) {
    res.status(500).json(error);
  }
};

// get timeline post
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });

    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

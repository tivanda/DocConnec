import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },

    firstname: String,
    lastname: String,
    commentList: [],
    checked: Boolean,
    desc: String,
    likes: [],
    image: String,
  },

  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("posts", postSchema);

export default PostModel;

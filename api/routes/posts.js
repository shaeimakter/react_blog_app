const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (request, response) => {
  const newPost = new Post(request.body);
  try {
    const savedPost = await newPost.save();
    response.status(200).json(savedPost);
  } catch (err) {
    response.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (post.username === request.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          request.params.id,
          {
            $set: request.body,
          },
          { new: true }
        );
        response.status(200).json(updatedPost);
      } catch (err) {
        response.status(500).json(err);
      }
    } else {
      response.status(401).json("You can update only your post!");
    }
  } catch (err) {
    response.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (post.username === request.body.username) {
      try {
        await post.delete();
        response.status(200).json("Post has been deleted...");
      } catch (err) {
        response.status(500).json(err);
      }
    } else {
      response.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    response.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (err) {
    response.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (request, response) => {
  const username = request.query.user;
  const catName = request.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    response.status(200).json(posts);
  } catch (err) {
    response.status(500).json(err);
  }
});

module.exports = router;

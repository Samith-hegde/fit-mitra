const communityPostQueries = require('../queries/communityPostService');

const createCommunityPost = async (req, res) => {
  try {
    const newPost = await communityPostQueries.createPost(req.body);
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCommunityPost = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await communityPostQueries.updatePost(id, req.body);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCommunityPost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await communityPostQueries.deletePost(id);
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCommunityPosts = async (req, res) => {
  try {
    const posts = await communityPostQueries.findAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommunityPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await communityPostQueries.findPostById(id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSocialsFeed = async (req, res) => {
  const { user_id } = req.body;
  try {
    const posts = await communityPostQueries.findSocialFeed(user_id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const likeCommunityPost = async (req, res) => {
  const { id } = req.params;
  try {
    const likedPost = await communityPostQueries.likePost(id);
    res.json(likedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const unlikeCommunityPost = async (req, res) => {
  const { id } = req.params;
  try {
    const unlikedPost = await communityPostQueries.unlikePost(id);
    res.json(unlikedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCommunityPost,
  updateCommunityPost,
  deleteCommunityPost,
  getAllCommunityPosts,
  getCommunityPostById,
  getSocialsFeed,
  likeCommunityPost,
  unlikeCommunityPost,
};

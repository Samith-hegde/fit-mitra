const communityPostQueries = require('../services/communityPostService');

const createSocial = async (req, res) => {
  try {
    const newPost = await communityPostQueries.createPost(req.body);
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSocial = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await communityPostQueries.updatePost(id, req.body);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSocial = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await communityPostQueries.deletePost(id);
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSocialById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await communityPostQueries.findPostById(id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSocialsFeed = async (req, res) => {
  const { user_id } = req.query;
  try {
    const posts = await communityPostQueries.findSocialFeed(user_id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const likeSocial = async (req, res) => {
  const { id } = req.params;
  try {
    const likedPost = await communityPostQueries.likePost(id);
    res.json(likedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const unlikeSocial = async (req, res) => {
  const { id } = req.params;
  try {
    const unlikedPost = await communityPostQueries.unlikePost(id);
    res.json(unlikedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSocial,
  updateSocial,
  deleteSocial,
  getSocialById,
  getSocialsFeed,
  likeSocial,
  unlikeSocial,
};

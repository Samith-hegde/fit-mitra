const prisma = require('../../config/prismaClient');

const createCommunityPost = async (req, res) => {
    const {
        user_id,
        title,
        content,
        post_type,
        likes,
    } = req.body;
    try {
        const newPost = await prisma.community_posts.create({
            data: {
                user_id: parseInt(user_id),
                title,
                content,
                post_type,
                likes,
            }
        });

        res.json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCommunityPost = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        content,
        post_type,
    } = req.body;
    try {
        const updatedPost = await prisma.community_posts.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title,
                content,
                post_type,
            }
        });

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCommunityPost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await prisma.community_posts.delete({
            where: {
                id: parseInt(id),
            }
        });

        res.json(deletedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllCommunityPosts = async (req, res) => {
    try {
        const posts = await prisma.community_posts.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    }
                }
        }});
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCommunityPostsOfUser = async (req, res) => {
    const { user_id } = req.params;
    try {
        const posts = await prisma.community_posts.findMany({
            where: {
                user_id: parseInt(user_id),
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    }
                }
            }
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getSocialsFeed = async (req, res) => {
    const { user_id } = req.params;
    try {
        const posts = await prisma.community_posts.findMany({
            where: {
                user_id: {
                    not: parseInt(user_id),
                }
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    }
                }
            }
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCommunityPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.community_posts.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    }
                }
            }
        });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const likeCommunityPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.community_posts.update({
            where: {
                id: parseInt(id),
            },
            data: {
                likes: {
                    increment: 1,
                }
            }
        });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const unlikeCommunityPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.community_posts.update({
            where: {
                id: parseInt(id),
            },
            data: {
                likes: {
                    decrement: 1,
                }
            }
        });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createCommunityPost,
    updateCommunityPost,
    deleteCommunityPost,
    getAllCommunityPosts,
    getCommunityPostsOfUser,
    getSocialsFeed,
    getCommunityPostById,
    likeCommunityPost,
    unlikeCommunityPost,
};
const friendQueries = require('../services/friendService');

const sendFriendRequest = async (req, res) => {
    const { userId, friendId } = req.body;
    try {
        const friendRequest = await friendQueries.createFriendRequest(userId, friendId, 'Pending');
        res.json(friendRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const acceptFriendRequest = async (req, res) => {
    const { userId, friendId } = req.body;
    try {
        const friendRequestAccept = await friendQueries.updateFriendRequest(userId, friendId, 'Accepted');
        const friendCreate = await friendQueries.createFriendRequest(userId, friendId, 'Accepted');
        res.json({ friendRequestAccept, friendCreate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const blockUser = async (req, res) => {
    const { userId, friendId } = req.body;
    try {
        const existingFriend = await friendQueries.findFriendRelationship(userId, friendId);
        if (!existingFriend) {
            const blockUser = await friendQueries.createFriendRequest(userId, friendId, 'Blocked');
            res.json(blockUser);
        } else {
            const blockUser = await friendQueries.updateFriendStatus(userId, friendId, 'Blocked');
            res.json(blockUser);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFriendsforUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const friends = await friendQueries.findFriendsByStatus(userId, 'Accepted');
        res.json(friends);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBlockedUsers = async (req, res) => {
    const { userId } = req.params;
    try {
        const blockedUsers = await friendQueries.findFriendsByStatus(userId, 'Blocked');
        res.json(blockedUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAwaitingResponse = async (req, res) => {
    const { userId } = req.params;
    try {
        const awaitingResponse = await friendQueries.findFriendsByStatus(userId, 'Pending');
        res.json(awaitingResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPendingFriendRequests = async (req, res) => {
    const { userId } = req.params;
    try {
        const pendingRequests = await friendQueries.findPendingRequests(userId);
        res.json(pendingRequests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const unfriend = async (req, res) => {
    const { userId, friendId } = req.body;
    try {
        const result = await friendQueries.deleteFriendRelationship(userId, friendId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    sendFriendRequest,
    acceptFriendRequest,
    blockUser,
    getFriendsforUser,
    getBlockedUsers,
    getAwaitingResponse,
    getPendingFriendRequests,
    unfriend,
};

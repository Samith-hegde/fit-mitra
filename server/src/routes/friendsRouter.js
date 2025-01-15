const express = require('express');
const router = express.Router();

const {    
    sendFriendRequest,
    acceptFriendRequest,
    blockUser,
    getFriendsforUser,
    getBlockedUsers,
    getAwaitingResponse,
    getPendingFriendRequests,
    unfriend,
} = require('../controllers/friendController');

router.post('/sendRequest', sendFriendRequest);
router.post('/acceptRequest', acceptFriendRequest);
router.post('/blockUser', blockUser);
router.get('/getFriends/:userId', getFriendsforUser);
router.get('/getBlocked/:userId', getBlockedUsers);
router.get('/getAwaiting/:userId', getAwaitingResponse);
router.get('/getPending/:userId', getPendingFriendRequests);
router.delete('/unfriend', unfriend);

module.exports = router;
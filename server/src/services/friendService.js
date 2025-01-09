const prisma = require('../../config/prismaClient');

const sendFriendRequest = async (req, res) => {
    const { userId, friendId } = req.body;
    try {
        const friendRequest = await prisma.friends.create({
            data: {
                userId: parseInt(userId),
                friendId: parseInt(friendId),
                status: 'Pending', 
            }
        });
        res.json(friendRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const acceptFriendRequest = async (req, res) => {
    const { userId, friendId } = req.body;
    try {
        const friendRequestAccept = await prisma.friends.updateMany({
            where: {
                userId: parseInt(friendId),
                friendId: parseInt(userId),
                status: 'Pending',
            },
            data: {
                status: 'Accepted',
            }
        });
        const friendCreate = await prisma.friends.create({
            data: {
                userId: parseInt(userId),
                friendId: parseInt(friendId),
                status: 'Accepted',
            }
        });
        res.json({
            friendRequestAccept,
            friendCreate,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const blockUser = async (req, res) => {
    const { userId, friendId } = req.body;
    const status = 'Blocked';
    
    try {
        // Check if friendship exists in either direction
        const existingFriend = await prisma.friends.findFirst({
            where: {
                OR: [
                    { userId: parseInt(userId), friendId: parseInt(friendId) },
                    { userId: parseInt(friendId), friendId: parseInt(userId) }
                ]
            }
        });
    
        if (!existingFriend) {
            // If no existing friendship, create the relationship in both directions
            const blockUser = await prisma.$transaction([
                prisma.friends.create({
                    data: {
                        userId: parseInt(userId),
                        friendId: parseInt(friendId),
                        status,
                    },
                }),
                prisma.friends.create({
                    data: {
                        userId: parseInt(friendId),
                        friendId: parseInt(userId),
                        status,
                    },
                })
            ]);
            res.json(blockUser); // Return both records (or you could just return one)
        } else {
            // If friendship exists, update the status in both directions
            const blockUser = await prisma.$transaction([
                prisma.friends.update({
                    where: {
                        userId_friendId: {
                            userId: parseInt(userId),
                            friendId: parseInt(friendId),
                        }
                    },
                    data: {
                        status,
                    }
                }),
                prisma.friends.update({
                    where: {
                        userId_friendId: {
                            userId: parseInt(friendId),
                            friendId: parseInt(userId),
                        }
                    },
                    data: {
                        status,
                    }
                })
            ]);
            res.json(blockUser); // Return both updated records (or you could just return one)
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }    
}
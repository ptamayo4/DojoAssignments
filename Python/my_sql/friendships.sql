SELECT users.first_name, users.last_name, user2.first_name AS friend_first_name, user2.last_name AS friend_last_name
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id;

-- INSERT INTO friendships(user_id, friend_id, created_at, updated_at)
-- VALUE (2,4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- inserting the user id and the friend id to establish friendship, needs to be done both ways to have friendship in both directions


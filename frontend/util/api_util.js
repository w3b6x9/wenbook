export const fetchSingleUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  });
};

export const updateSingleUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user },
  });
};

export const updateSingleUserImage = (userId, imageData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: imageData,
  });
};

export const createFriendship = friendship => {
  return $.ajax({
    method: 'POST',
    url: 'api/friendships',
    data: { friendship },
  });
};

export const updateFriendship = friendship => {
  return $.ajax({
    method: 'PATCH',
    url: `api/friendships/${friendship.friendship_id}`,
    data: { friendship },
  });
};

export const fetchPendingRequests = () => {
  return $.ajax({
    method: 'GET',
    url: `api/friendships`,
  });
};

export const fetchAllFriends = userId => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/friends`,
  });
};

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: { post },
  });
};

export const fetchWallPosts = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/wallfeed`,
  });
};

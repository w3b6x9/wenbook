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

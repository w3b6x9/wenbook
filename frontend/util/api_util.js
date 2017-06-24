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

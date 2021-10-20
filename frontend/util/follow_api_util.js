export const getAllFollows = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/follows`,
  });
};

export const getFollow = (userId, followId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/follows/${followId}`,
  });
};

export const postFollow = (userId, follow) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/follows`,
    data: { follow },
  });
};

export const deleteFollow = (userId, followId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/follows/${followId}`,
  });
};

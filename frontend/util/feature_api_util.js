export const getAllFeatures = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/features',
  });
};

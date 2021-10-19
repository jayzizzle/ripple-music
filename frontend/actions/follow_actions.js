import * as APIUtil from '../util/follow_api_util';

export const RECEIVED_ALL_FOLLOWS = 'RECEIVED_ALL_FOLLOWS';
export const RECEIVED_FOLLOW = 'RECEIVED_FOLLOW';
export const REMOVED_FOLLOW = 'REMOVED_FOLLOW';

export const receivedAllFollows = (follows) => ({
  type: RECEIVED_ALL_FOLLOWS,
  follows,
});

export const receivedFollow = (follow) => ({
  type: RECEIVED_FOLLOW,
  follow,
});

export const removedFollow = (followId) => ({
  type: REMOVED_FOLLOW,
  followId,
});

export const getAllFollows = (userId) => (dispatch) =>
  APIUtil.getAllFollows(userId).then((follows) =>
    dispatch(receivedAllFollows(follows))
  );

export const getFollow = (userId, followId) => (dispatch) =>
  APIUtil.getFollow(userId, followId).then((follow) =>
    dispatch(receivedFollow(follow))
  );

export const postFollow = (userId, follow) => (dispatch) =>
  APIUtil.postFollow(userId, follow).then((follow) =>
    dispatch(receivedFollow(follow))
  );

export const deleteFollow = (userId, followId) => (dispatch) =>
  APIUtil.deleteFollow(userId, followId).then((followId) =>
    dispatch(removedFollow(followId))
  );

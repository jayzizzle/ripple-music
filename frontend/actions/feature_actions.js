import * as APIUtil from '../util/feature_api_util';

export const RECEIVED_ALL_FEATURES = 'RECEIVED_ALL_FEATURES';

export const receivedAllFeatures = (features) => ({
  type: RECEIVED_ALL_FEATURES,
  features,
});

export const getAllFeatures = () => (dispatch) =>
  APIUtil.getAllFeatures().then((features) =>
    dispatch(receivedAllFeatures(features))
  );

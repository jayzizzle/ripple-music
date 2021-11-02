export const SET_TO_PLAY = 'SET_TO_PLAY';
export const SET_TO_PAUSE = 'SET_TO_PAUSE';
export const SET_TO_READY = 'SET_TO_READY';

export const setToPlay = (playerStatus) => ({
  type: SET_TO_PLAY,
  playerStatus,
});

export const setToPause = (playerStatus) => ({
  type: SET_TO_PAUSE,
  playerStatus,
});

export const setToReady = (playerStatus) => ({
  type: SET_TO_READY,
  playerStatus,
});

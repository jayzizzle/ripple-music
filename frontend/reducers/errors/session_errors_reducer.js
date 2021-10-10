import { 
  RECEIVED_SESSION_ERRORS,
  RECEIVED_CURRENT_USER, 
  CLEARED_SESSION_ERRORS
} from "../../actions/session_actions";

const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVED_SESSION_ERRORS:
      return action.errors;
    case RECEIVED_CURRENT_USER:
      return [];
    case CLEARED_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
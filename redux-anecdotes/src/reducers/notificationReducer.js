export const NOTIFICATION_TIMEOUT = 5000;
let timeoutID;

const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.message;
    default:
      return state;
  }
};

export const setNotificationAction = (message) => {
  return {
    type: "SET_NOTIFICATION",
    message,
  };
};

export const emptyNotificationAction = () => {
  return {
    type: "SET_NOTIFICATION",
    message: null,
  };
};

export const showNotificationWithTimeout = (message, timeout) => {
  return async (dispatch) => {
    dispatch(setNotificationAction(message));
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      dispatch(emptyNotificationAction());
    }, timeout);
  };
};

export default notificationReducer;

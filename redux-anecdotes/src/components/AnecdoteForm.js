import React from "react";
import { connect } from "react-redux";

import { addAction } from "../reducers/anecdoteReducer";
import {
  showNotificationWithTimeout,
  NOTIFICATION_TIMEOUT,
} from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    props.addAction(content);

    props.showNotificationWithTimeout(
      `you added '${content}'`,
      NOTIFICATION_TIMEOUT
    );
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addAction,
  showNotificationWithTimeout,
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm;

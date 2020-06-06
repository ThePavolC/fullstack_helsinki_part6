import React from "react";
import { connect } from "react-redux";

import { voteAction } from "../reducers/anecdoteReducer";
import {
  showNotificationWithTimeout,
  NOTIFICATION_TIMEOUT,
} from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const vote = (id) => {
    const anecdote = props.anecdotes.find((a) => a.id === id);
    props.voteAction(anecdote);

    props.showNotificationWithTimeout(
      `you voted '${anecdote.content}'`,
      NOTIFICATION_TIMEOUT
    );
  };

  return (
    <div>
      {props.anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const sortFunc = (a, b) => b.votes - a.votes;
  const { anecdotes, filter } = state;

  let tempAnecdotes = [...anecdotes];

  if (filter) {
    const filteredAnecdotes = anecdotes.filter((a) =>
      a.content.includes(filter)
    );
    tempAnecdotes = filteredAnecdotes;
  }

  tempAnecdotes.sort(sortFunc);

  return {
    anecdotes: tempAnecdotes,
  };
};

const mapDispatchToProps = {
  voteAction,
  showNotificationWithTimeout,
};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;

import React from "react";
import { connect } from "react-redux";

import { setFilterAction } from "../reducers/filterReducer";

const Filter = (props) => {
  const handleChange = (event) => {
    const query = event.target.value;
    props.setFilterAction(query);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapDispatchToProps = {
  setFilterAction,
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);
export default ConnectedFilter;

import React from "react";
import { connect } from "react-redux";
import { setWait } from "../../redux/events/eventActions";
import Paper from "@material-ui/core/Paper";

const Wait = ({ events, comp_id, set_wait }) => {
  const wait = 1; // Static wait time of 1 second

  // Set Wait value for current component
  function handleClick() {
    let curr = { ...events.wait }; // Create a copy to avoid direct mutation
    curr[comp_id] = wait;
    set_wait(curr);
  }

  return (
    // Wait Component
    <Paper elevation={3}>
        <div
          id={comp_id}
          className="text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={handleClick}
        >
          Wait {wait} second
        </div>
    </Paper>
  );
};

// map state to component
const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

// map function to component
const mapDispatchToProps = (dispatch) => {
  return {
    set_wait: (value) => dispatch(setWait(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wait);

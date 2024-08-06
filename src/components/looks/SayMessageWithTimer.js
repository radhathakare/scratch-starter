import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const ThinkMessageWithTimer = ({ character, comp_id }) => {
  const message = "hmm";
  const timerForMsg = 3; // Static timer duration in seconds

  /* Display Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el2.style.display = "none";

    el.style.display = "block";
    el.style.position = "relative";
    el.innerHTML = message;

    window.setTimeout(() => {
      el.style.display = "none";
    }, timerForMsg * 1000);
  };

  return (
    <Paper elevation={3}>
        <div
          id={comp_id}
          className="flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={displayMessage}
        >
          {`Think ${message} for ${timerForMsg} seconds`}
        </div>
    </Paper>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(ThinkMessageWithTimer);

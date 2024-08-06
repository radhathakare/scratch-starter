import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const SayMessage = ({ character, comp_id }) => {
  const state = {
    message: "Hello",
  };

  /* Display Message */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    el.style.display = "block";
    el.style.position = "relative";
    el.innerHTML = state.message;

    el2.style.display = "none";

    // Hide the message after 2 seconds
    setTimeout(() => {
      el.style.display = "none";
    }, 2000);
  };

  return (
    <Paper elevation={3}>
        <div className="flex text-center flex-row flex-wrap bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={displayMessage}
        >
          {`Say ${state.message} 2 seconds`}
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

export default connect(mapStateToProps)(SayMessage);

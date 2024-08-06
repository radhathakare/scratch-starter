import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// Move Component for Sidebar
const Move = ({ character, comp_id }) => {
  const steps = 10; // Static value for steps

  // Function used for moving the sprite
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    if (el) {
      const left = el.offsetLeft;
      el.style.position = "relative";
      el.style.left = left + steps + "px";
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className="text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto"
        onClick={handleClick}
      >
        Move X {steps} steps
      </div>
    </Paper>
  );
};

// Mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Move);

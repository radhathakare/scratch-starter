import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// MoveY Component for Sidebar
const MoveY = ({ character, comp_id }) => {
  const steps = 10; // Static value for steps

  // Function used for moving the sprite in the Y direction
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    if (el) {
      const top = el.offsetTop;
      el.style.position = "relative";
      el.style.top = top + steps + "px";
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className="text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto"
        onClick={handleClick}
      >
        Move Y {steps} steps
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

export default connect(mapStateToProps)(MoveY);

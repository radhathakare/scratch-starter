import React from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/character/actions";
import UndoIcon from "@material-ui/icons/Undo";
import Paper from "@material-ui/core/Paper";

const TurnAntiClockWise = ({ character, characterAngle, comp_id }) => {
  const angle = 15; // Static value for angle

  // handle anti-clockwise rotation
  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
      characterAngle(character_angle.angle + anti_angle);
    }
  };

  return (
    <Paper elevation={3}>
        <div
          id={comp_id}
          className="flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex mx-auto">
            Turn
            <UndoIcon className="mx-2" />
            {angle} degrees
          </div>
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

// mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockWise);

import React from "react";
import CatSprite from "./CatSprite";
import { connect } from "react-redux";
import { addCharacter, setActive } from "../redux/character/actions";
import { createStyles, makeStyles } from "@material-ui/core/styles";

// Styling for MaterialUI Components
const useStyles = makeStyles((theme) =>
  createStyles({
    characterContainer: {
      position: 'absolute',
    },
    messageBox: {
      display: 'none',
      border: '2px solid',
      padding: theme.spacing(2),
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    messageBox1: {
      display: 'none',
      border: '2px solid',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      position: 'absolute',
      left: '50%',
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  })
);

function PreviewArea({ character, set_active }) {
  const classes = useStyles();
  let elmnt = null;

  function dragMouseDown(e, id) {
    elmnt = document.getElementById(id);

    e = e || window.event;
    e.preventDefault();
    let pos3 = e.clientX, pos4 = e.clientY;

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      const pos1 = pos3 - e.clientX;
      const pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      elmnt.style.top = `${elmnt.offsetTop - pos2}px`;
      elmnt.style.left = `${elmnt.offsetLeft - pos1}px`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  return (
    <div className="w-full flex-none h-full overflow-y-auto p-3" id="preview_area">
      <div className="flex justify-between mb-10">
        {/* Add any additional UI elements here */}
      </div>
      <div className="flex justify-around h-full">
        {character.characters.map((x, i) => (
          <div
            id={`${x.id}-${i}`}
            key={i}
            className={classes.characterContainer}
            onMouseDown={(e) => dragMouseDown(e, `${x.id}-${i}`)}
          >
            <div id={`${x.id}-div`} className="character">
              <div
                className={classes.messageBox}
                id={`${x.id}-message-box`}
              ></div>
              <div
                className={classes.messageBox1}
                id={`${x.id}-message-box1`}
              ></div>
              <CatSprite charac_id={x.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Mapping state and dispatch to props
const mapStateToProps = (state) => ({
  character: state.character,
});

const mapDispatchToProps = (dispatch) => ({
  add_character: () => dispatch(addCharacter()),
  set_active: (ch_id) => dispatch(setActive(ch_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewArea);

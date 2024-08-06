import React from "react";
import Paper from "@material-ui/core/Paper";
import { useSnackbar } from "notistack";

const BroadcastMessage = ({ comp_id }) => {
  const { enqueueSnackbar } = useSnackbar();
  const staticMessage = "Stop"; // Static message

  /* Display Snackbar */
  const handleClick = () => {
    enqueueSnackbar(staticMessage, { variant: "info" });
  };

  return (
    <Paper elevation={3}>
        <div
          id={comp_id}
          className="rounded flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={handleClick}
        >
          {`Alert ${staticMessage}`}
        </div>
    </Paper>
  );
};

export default BroadcastMessage;

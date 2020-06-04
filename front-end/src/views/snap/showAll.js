import React, { useEffect, useState } from "react";
import { getSnaps, readSnap, seenSnap } from "../../service/snap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";

import {
  IconButton,
  Card,
  CardHeader,
  Avatar,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";

/**Styles for the modal */
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AllSnaps = () => {
  const classes = useStyles();
  const [snaps, setSnaps] = useState([]);
  const [snap, setSnap] = useState("");
  const [open, setOpenModal] = React.useState(false);

  useEffect(() => {
    getSnaps(setSnaps);
  }, [snap]);

  const openSnap = ({ snap_id, duration }) => {
    setOpenModal(true);
    readSnap(snap_id, setSnap).then(() => {
      setTimeout(() => {
        seenSnap(snap_id, setSnap);
        return setOpenModal(false);
      }, duration * 1000);
    });
    // .then((data) => handleModal("close"));
  };

  return (
    <div className="snaps">
      <h1>Snaps</h1>
      <ul className="snap-list">
        {snaps.map((snap) => (
          <li key={snap.snap_id} className="snap-container">
            <Card className="snap-card">
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                  <IconButton
                    onClick={() => openSnap(snap)}
                    className="btn-open"
                  >
                    open <VisibilityIcon />
                  </IconButton>
                }
                title={`from ${snap.from}`}
                subheader={`${snap.duration} second(s)`}
              />{" "}
            </Card>
          </li>
        ))}
      </ul>

      {snap && (
        <Modal
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropProps={{ opacity: 0.1 }}
          onClose={() => setOpenModal(false)}
        >
          <Fade in={open}>
            <img src={snap} alt="mon super snap" />
          </Fade>
        </Modal>
      )}
    </div>
  );
};

export default AllSnaps;

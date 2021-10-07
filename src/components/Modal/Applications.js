import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, H6 } from "../../styles";
import Divider from "@material-ui/core/Divider";
import ReactJson from "react-json-view";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 30px 36px #557DA526",
    outline: 0,
    width: "50vw",
    height: "70vh",
    padding: "25px 22px",
  },
}));

export default function Applications({ open, setOpen, post }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <H6 type="apphead">JSON </H6>
            <Divider style={{ margin: "0px 8px" }} />

            <Box
              display="grid"
              gridTemplateColumns={["1fr", " 1fr 1fr", "1fr 1fr"]}
              gridGap={"30px"}
              style={{
                overflowY: "scroll",
                backgroundColor: "#557DA526",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <ReactJson src={post} />
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

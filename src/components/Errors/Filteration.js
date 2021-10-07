import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../styles/index";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class DialogSelect extends React.Component {
  state = {
    open: false,
    age: "",
    code: "",
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });

    console.log(event.target.value);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.filterHandler(this.state.age, this.state.code);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Filter</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Add Filteration</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">environment</InputLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange("age")}
                  input={<Input id="age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"staging"}>staging</MenuItem>
                  <MenuItem value={"local"}>local</MenuItem>
                  <MenuItem value={"development"}>development</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="code-simple">Code</InputLabel>
                <Select
                  value={this.state.code}
                  onChange={this.handleChange("code")}
                  input={<Input id="code-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={500}>500</MenuItem>
                  <MenuItem value={400}>400</MenuItem>
                  <MenuItem value={401}>401</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);

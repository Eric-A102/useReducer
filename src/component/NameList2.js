import React, { useReducer } from "react";
import reducer from "./reducer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
const Data = {
  user: { firstName: "", lastName: "" },
  fullNames: []
};

export default function Counter() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, Data);
  const { user, fullNames } = state;
  const dense = false;

  const handleChange = e => {
    dispatch({
      type: "form",
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "getName",
      fullName: [...fullNames, user]
    });
  };

  return (
    <>
      <h3>List 2</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <form
          style={{ marginLeft: "44.5%" }}
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="firstName"
              onChange={handleChange}
              value={user.firstName}
            />

            <TextField
              style={{ marginTop: 10, marginBottom: 10 }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastName"
              onChange={handleChange}
              value={user.lastName}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
        <div
          className={classes.demo}
          style={{ marginLeft: "47%", textAlign: "center" }}
        >
          <List dense={dense}>
            {fullNames.map((data, i) => (
              <ListItem key={i}>
                <ListItemText primary={data.firstName + " " + data.lastName} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

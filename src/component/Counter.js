import React, { useReducer } from "react";
import reducer from "./reducer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
const Data = {
  firstName: "",
  lastName: "",
  fullNames: []
};

export default function Counter() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, Data);
  const { firstName, lastName, fullNames } = state;
  const dense = false;

  const handleChange = e => {
    dispatch({
      type: "form",
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    dispatch({
      type: "getName",
      fullName: [...fullNames, firstName + " " + lastName]
    });
  };

  console.log(fullNames);
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Type Text"
          variant="outlined"
          name="firstName"
          onChange={handleChange}
          value={firstName}
        />
        <TextField
          id="outlined-basic"
          label="Type Text"
          variant="outlined"
          name="lastName"
          onChange={handleChange}
          value={lastName}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <div className={classes.demo}>
        <List dense={dense}>
          {fullNames.map((data, i) => (
            <ListItem key={i}>
              <ListItemText primary={data} />
            </ListItem>
          ))}
        </List>
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

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Button from "@material-ui/core/Button";

// export default function Counter() {
//   const [message, setMessage] = useState("");
//   const [list, setList] = useState([]);
//   const classes = useStyles();
//   const dense = false;

//   const handleChange = e => {
//     setMessage(e.target.value);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     setList([...list, message]);
//   };
//   return (
//     <div>
//       <form
//         className={classes.root}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <TextField
//           id="outlined-basic"
//           label="Type Text"
//           variant="outlined"
//           onChange={handleChange}
//           value={message}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//       <div className={classes.demo}>
//         <List dense={dense}>
//           {list.map((data, i) => (
//             <ListItem key={i}>
//               <ListItemText primary={data} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     </div>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: 200
//     }
//   }
// }));

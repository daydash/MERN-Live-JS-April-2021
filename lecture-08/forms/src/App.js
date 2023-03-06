import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

let useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    background: "#cccccc",
    minHeight: "100vh",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    background: "#ffffff",
    margin: "10px",
  },
  basicInput: {
    margin: "20px",
    width: "600px",
  },
  buttonsBox: {
    width: "600px",
    display: "flex",
    margin: "40px 0px",
  },

  btn: {
    flexGrow: 1,
    margin: "20px",
    padding: "5px",
    textTransform: "capitalize",
  },
});

function App() {
  let classes = useStyle();

  let empty = {
    name: "",
    email: "",
    address: "",
    phone: "",
  };

  let [formData, setFormData] = useState({ empty });

  let fields = [
    {
      name: "name",
      title: "Name",
    },
    {
      name: "email",
      title: "Email",
    },
    {
      name: "address",
      title: "Address",
    },
    {
      name: "phone",
      title: "Phone Number",
    },
  ];

  let handleChange = function (event) {
    console.log(event.target.name, event.target.value);

    // let updated = { ...formData };
    // updated[event.target.name] = event.target.value;
    // setFormData(updated);

    let { name, value } = event.target;
    setFormData({ [name]: value, ...formData });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h1">My Form</Typography>

      {fields.map(function (item, idx) {
        return (
          <Box key={idx} className={classes.formBox}>
            <TextField
              className={classes.basicInput}
              label={item.title}
              name={item.name}
              value={formData[item.name]}
              onChange={handleChange}
            />
          </Box>
        );
      })}

      <Box className={classes.buttonsBox}>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          style={{ flexGrow: 2 }}
          onClick={function () {
            axios
              .post("http://localhost:5000/submit", formData)
              .then((response) => {
                console.log("Success", response);
              })
              .catch((error) => {
                console.log("Error", error);
              });
          }}
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={function () {
            setFormData(empty);
          }}
        >
          Empty
        </Button>
      </Box>
    </Box>
  );
}

export default App;

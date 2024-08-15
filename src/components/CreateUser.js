// CreateUser.js
import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import image from "../assets/form-bac";
import backgroundImage from "../assets/form-background.jpg";

function CreateUser({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div
      style={{
        backgroundColor: "orange",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Add User</h2>

      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          flexWrap: "wrap",
        }}
      >
        <TextField
          id="outlined-name-input"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: "#333", // Dark background color
              color: "#fff", // Text color
            },
          }}
          InputLabelProps={{
            style: {
              color: "#fff", // Label color
              fontSize: "15px",
            },
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: "#333", // Dark background color
              color: "#fff", // Text color
            },
          }}
          InputLabelProps={{
            style: {
              color: "#fff", // Label color
              fontSize: "15px",
            },
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="success"
          type="submit"
          style={{ marginBottom: "20px" }}
        >
          Add user
        </Button>
      </Box>
    </div>
  );
}

export default CreateUser;

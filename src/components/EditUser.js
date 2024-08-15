// EditUser.js
import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/edit-background.jpg";
import { Box, TextField, Button } from "@mui/material";

function EditUser({ user, onUpdate, onCancel }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...user, name, email });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px", 
      }}
    >
      
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{
          marginRight: "15%",

          display: "flex",
          flexDirection: "column",

          alignItems: "flex-end",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <h2>Edit User</h2>
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
              color: "#fff", 
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
        <Button variant="contained" color="success" type="submit">
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          type="submit"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Box>
    </div>
  );
}

export default EditUser;

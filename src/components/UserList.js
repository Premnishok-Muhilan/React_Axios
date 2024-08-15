// UserList.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Card,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import "../App.css";

function UserList({ users, onEdit, onDelete }) {
  return (
    <Grid style={{ margin: "10px" }}>
      <TableContainer
        component={Card}
        style={{ borderRadius: "20px", border: "5px solid grey" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  maxWidth: "50px",
                  fontFamily: "Poppins",
                  fontWeight: 900,
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  maxWidth: "50px",
                  fontFamily: "Poppins",
                  fontWeight: 900,
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  maxWidth: "50px",
                  fontFamily: "Poppins",
                  fontWeight: 900,
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.id}
                sx={{
                  backgroundColor: "black",
                }}
              >
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    
                  }}
                >
                  {user.name}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontFamily: "Glory",
                    fontSize: "15px",
                  }}
                >
                  {user.email}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default UserList;

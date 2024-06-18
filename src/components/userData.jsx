import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SortIcon from '@mui/icons-material/Sort';

const FetchApi = (props) => {

  console.log("Second", props.userData)

  const allUserData = props.userData;

  return (
    <>
      <List>
      <div style={{ transform: "rotate(0deg)", width:"50px" }}>
      <ListItem button>
                    <ListItemIcon>
                        <SortIcon />
                    </ListItemIcon>
      </ListItem>
      </div>
        {allUserData && allUserData.length > 0 ? (
          allUserData.map((user) => (
            <ListItem key={user.id}>
              <PersonIcon />
              <ListItemText>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body1">{user.email}</Typography>
                <Typography variant="body1">{user.phone}</Typography>
              </ListItemText>
            </ListItem>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </List>
    </>
  );
};

export default FetchApi;

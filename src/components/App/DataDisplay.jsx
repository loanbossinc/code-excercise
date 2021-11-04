import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

import { Card, Typography, CardContent, Divider, ListItemText } from "@material-ui/core";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper"
};

const createDisplayRow = displayData => {
  const rows = [];

  for (const pair of Object.entries(displayData)) {
    if (pair[0] === "address") {
      const formatted = formatAddress(pair[1]);
      pair[1] = formatted;
    }

    if (pair[0] === "phoneNumber") {
      const formatted = formatPhone(pair[1]);
      pair[1] = formatted;
    }
    rows.push(
      <div>
         <Divider light />
        <ListItem>
          <ListItemText style={style} key={pair[0]}>{`${formatKey(pair[0])}: ${pair[1]}`}</ListItemText>
        </ListItem>
        <Divider light />

      </div>



    );
  }

  return rows;
};

const formatKey = key => {
  if (/[A-Z]/.test(key)) {
    const split = key.split(/(?=[A-Z])/);
    return split.map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(" ");
  }
  return key[0].toUpperCase() + key.slice(1, key.length);
};

const formatAddress = addressObj => {
  const { street, city, state, zip } = addressObj;
  return `${street}, ${city}, ${state}, ${zip}`;
};

const formatPhone = phoneStr => {
  const cleaned = `${phoneStr}`.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

export default function DataDisplay({ listItems }) {
  if ("jobTitle" in listItems) {
    return (
      <Box mt={2}>
        <Card className="infoCards">
          <CardContent>
            <Typography variant="h2">User Profile</Typography>
            <Typography variant="body2">Contact Information</Typography>
            <List> {createDisplayRow(listItems)} </List>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box mt={2}>
      <Card className="infoCards">
        <CardContent>
          <Typography variant="body2">Personal Information</Typography>
          <List> {createDisplayRow(listItems)} </List>
        </CardContent>
      </Card>
    </Box>
  );
}

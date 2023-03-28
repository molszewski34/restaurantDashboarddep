import React, { useState } from "react";
//import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from '@mui/material/Drawer';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Box } from "@mui/system";
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from "@mui/material/Typography";
import Apps from "@mui/icons-material/Apps";
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';



const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

// const useStyles = makeStyles((theme) => ({
//   menuSliderContainer: {
//     width: 250,
//     background: "#511",
//     height: "100%"
//   },
//   avatar: {
//     margin: "0.5rem auto",
//     padding: "1rem",
//     width: theme.spacing(13),
//     height: theme.spacing(13)
//   },
//   listItem: {
//     color: "tan"
//   }
// }));

const listItems = [
  {
    listIcon: <MailIcon />,
    listText: "Home"
  },
  {
    listIcon: <MailIcon />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <MailIcon />,
    listText: "Contacts"
  }
];

export default function SideBarComponent() {
  
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box component="div">
   
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="nav">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <MenuIcon />
            </IconButton>
            <Typography>Portfolio</Typography>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

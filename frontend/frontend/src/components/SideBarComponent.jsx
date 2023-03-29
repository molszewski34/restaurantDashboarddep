import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, MenuItem } from "react-pro-sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemButton from "@mui/material/ListItemButton";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { logout } from "../actions/userActions";
import CircularProgress from "@mui/material/CircularProgress";

const listItems = [
  {
    listIcon: <RestaurantMenuIcon />,
    listText: "Menu",
    to: "/dishmenu",
  },
  {
    listIcon: <TableRestaurantIcon />,
    listText: "Tables",
    to: "/tables",
  },
  {
    listIcon: <FormatListNumberedIcon />,
    listText: "Orders",
    to: "/orders",
  },
  {
    listIcon: <PeopleOutlinedIcon />,
    listText: "Staff",
    to: "/staff",
  },
  {
    listIcon: <AdminPanelSettingsIcon />,
    listText: "Admin",
    to: "/admin-panel",
  },
];

export default function SideBarComponent() {
  const [open, setOpen] = useState(false);
  let dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const toggleSlider = () => {
    setOpen(!open);
  };

  const logoutUser = () => {
    dispatch(logout());
    window.location.reload();
  };

  const sideList = () => (
    <Box component="div">
      <Divider />
      <Menu>
        <MenuItem
          style={{ textAlign: "center" }}
          icon={<MenuOutlinedIcon onClick={toggleSlider} />}
        >
          {userInfo && `Welcome ${userInfo.first_name}`}
        </MenuItem>
      </Menu>
      <Divider />

      <List>
        {listItems.map((listItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{listItem.listIcon}</ListItemIcon>
              <Link to={listItem.to} style={{ textDecoration: "none" }}>
                <ListItemText
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  primary={listItem.listText}
                  onClick={toggleSlider}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {userLogin.userInfo.id ? (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <ListItemText
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  primary="Logout"
                  onClick={logoutUser}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ListItemText
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  primary="Login"
                  onClick={toggleSlider}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <>
      <CssBaseline />

      <Box component="nav">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <MenuIcon />
            </IconButton>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard"
            >
              {" "}
              <Typography>Restaurant Dashboard</Typography>
            </Link>

            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

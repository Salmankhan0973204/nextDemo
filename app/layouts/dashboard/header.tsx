import React, { useState } from "react";
import {
  AppBar,
  Box,
  Tooltip,
  Toolbar,
  IconButton,
  useTheme,
} from "@mui/material";
import { NotificationDrawer, ProfileDrawer } from "./drawer";
import { DesktopNavbar, MobileNavbar } from "./navbar";


function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();

  let user = { 
    name:"salman"
  }


  const toggleDrawer = (): void => {
    setOpen(!open);
  };

  const toggleDrawerNotifications = (): void => {
    setOpenNotifications(!openNotifications);
  };

  const toggleDrawerMenu = (): void => {
    setOpenMenu(!openMenu);
  };
  // const themeMode = ThemeModeColor(theme.palette.neutral[600], theme.palette.neutral[400])
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "background.paper",
        boxShadow: theme.shadows[5],
        maxHeight: "8rem",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: { md: "40px", xs: "20px" },
          py: "16px",
          justifyContent: "space-between",
        }}
      >
        <MobileNavbar toggleDrawerMenu={toggleDrawerMenu} openMenu={openMenu} />
        <DesktopNavbar />
        <Box>
          <Tooltip title="Notification">
            <IconButton
              sx={{ mr: { xs: 1, lg: 3 } }}
              onClick={toggleDrawerNotifications}
            >
              {/* <BellIcon
                sx={{
                  color: themeMode,
                }}
              /> */}
              BillIcon
            </IconButton>
          </Tooltip>
          <NotificationDrawer
            openNotifications={openNotifications}
            toggleDrawerNotifications={toggleDrawerNotifications}
          />

          <Tooltip title="Profile settings">
            <IconButton
              onClick={toggleDrawer}
              // sx={{
              //   color: themeMode,
              // }}
            >
        
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
      <ProfileDrawer open={open} toggleDrawer={toggleDrawer} user={user} />
    </AppBar>
  );
}

export default Header;

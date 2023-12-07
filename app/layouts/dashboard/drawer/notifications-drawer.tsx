import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { styles } from "./drawer.styles";
import { KeyboardArrowRight } from "@mui/icons-material";

interface NotificationDrawerProps {
  openNotifications: boolean;
  toggleDrawerNotifications: () => void;
}

const notificationsList = [
  {
    id: 1,
    message: "Job post successfully",
    time: "3 hours ago",
    // icon: <ProfileIcon width="32px" height="32px" />,
  },
  {
    id: 1,
    message: "Candidate applied for the new position.",
    time: "5 days ago",
    // icon: <ProfileIcon width="32px" height="32px" />,
  },
];

export function NotificationDrawer({
  openNotifications,
  toggleDrawerNotifications,
}: NotificationDrawerProps): JSX.Element {
  return (
    <Drawer
      anchor="right"
      open={openNotifications}
      onClose={toggleDrawerNotifications}
      PaperProps={{
        sx: { padding: '16px', ...styles.drawerStyle }
      }}
    >
      <IconButton sx={styles.customCloseIcon} onClick={toggleDrawerNotifications}>
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        sx={styles.closeIcon}
        onClick={toggleDrawerNotifications}
      >
        <CloseIcon />
      </IconButton>
      <Box p='8px'>
        <Typography
          variant="body1"
          fontWeight="700"
          mb='24px'
          // sx={{ color: ThemeModeColor() }}
        >
          Notifications
        </Typography>
        {notificationsList.map((item) => (
          <Box key={item.id} sx={styles.notificationList}>
            {/* {item.icon} */}icon
            <Box sx={{ ml: 1.5 }}>
              <Typography variant="subtitle1">
                {item.message}
              </Typography>
              <Typography variant="caption" mt='16px'>
                {item.time}
              </Typography>
            </Box>
          </Box>
        ))}
        <Box sx={styles.viewAllBtn}>
          <StyledViewAllLink href="/notifications">View All</StyledViewAllLink>
        </Box>
      </Box>
    </Drawer>
  );
}

//--------------------------------------------------------
// Styled  components
const StyledViewAllLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[5],
  fontSize: "12px",
  fontWeight: "600",
  padding: "8px 12px",
  borderRadius: 3,
  textDecoration: "none",
}));

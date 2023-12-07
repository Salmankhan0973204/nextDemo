import React from "react";
import {
  Box,
  Typography,
  Tooltip,
  Drawer,
  Button,
  IconButton,
  styled,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Link from "next/link";

// google fonts
import { Poppins } from "next/font/google";
import { pagesNavbar } from "./navbar.data";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface MobileNavbarProps {
  toggleDrawerMenu: () => void;
  openMenu: boolean;
}

export function MobileNavbar({
  toggleDrawerMenu,
  openMenu,
}: MobileNavbarProps): JSX.Element {

  return (
    <>
      <Box sx={{ display: { xs: "flex", xl: "none" } }}>
        <Tooltip title="Notification">
          <Button onClick={toggleDrawerMenu}>
            <MenuIcon />
          </Button>
        </Tooltip>
      </Box>

      <Drawer
        anchor="left"
        open={openMenu}
        onClose={toggleDrawerMenu}
        sx={{ borderRadius: "10px" }}
      >
        <Box sx={{ width: "240px", p: 2, borderRadius: 5 }}>
          <IconButton
            sx={{ display: "block", ml: "auto" }}
            onClick={toggleDrawerMenu}
          >
            <CloseIcon />
          </IconButton>
          <Link href="/">
            {/* <LogoPerformance /> */} logo
          </Link>
          {pagesNavbar

            .map((item: any) => (
              <StyledMenuLink
                key={item.id}
                href={item.link}
                onClick={toggleDrawerMenu}
              >
                <Typography
                  variant="body2"
                  fontWeight="500"
                  color="neutral.400"
                >
                  {item.title}
                </Typography>
              </StyledMenuLink>
            ))}
        </Box>
      </Drawer>
    </>
  );
}

//--------------------------------------------------------
// Styled  components

const StyledMenuLink = styled(Link)(({ theme }) => ({
  padding: "15px",
  // color: theme.palette.neutral[600],
  textDecoration: "none",
  fontFamily: poppins.style.fontFamily,
}));

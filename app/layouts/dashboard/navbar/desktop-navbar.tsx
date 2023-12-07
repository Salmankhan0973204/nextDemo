import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";

// google fonts
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { pagesNavbar } from "./navbar.data";


const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export function DesktopNavbar(): JSX.Element {
  const pathName = usePathname();

  return (
    <>
      <Box sx={{ display: { xs: "none", xl: "flex" } }}>
        <Link href="/">
          {/* <LogoPerformance /> */} logo
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "none", xl: "flex" },
          alignItems: "center",
          gap: { xl: "10px" },
        }}
      >
        {pagesNavbar
          .map((page) => (
            <StyledNavLink
              key={page.id}
              href={page.link}
              className={pathName.includes(page.link) ? "active" : ""}
            >
              <Typography
                variant="body2"
                fontWeight={pathName.includes(page.link) ? "600" : "500"}
                color={pathName.includes(page.link) ? "primary" : "neutral.400"}
              >
                {page.title}
              </Typography>
            </StyledNavLink>
          ))}
      </Box>
    </>
  );
}

//--------------------------------------------------------
// Styled  components

const StyledNavLink = styled(Link)(({ theme }) => ({
  position: "relative",
  padding: "0px 8px",
  color: theme.palette.neutral[600],
  display: "block",
  borderBottom: "3px solid transparent",
  textDecoration: "none",
  textAlign: "center",
  fontFamily: poppins.style.fontFamily,
  "&.active::before": {
    opacity: 1,
  },
  "&::before": {
    content: `""`,
    opacity: 0,
    position: "absolute",
    width: "100%",
    height: "5px",
    bottom: "-29px",
    left: 0,
    borderTopLeftRadius: "5rem",
    borderTopRightRadius: "5rem",
    backgroundColor: theme.palette.primary.main,
    transition: "opacity .150s",
  },
  "&:hover": {
    "&::before": {
      opacity: 1,
    },
  },
}));

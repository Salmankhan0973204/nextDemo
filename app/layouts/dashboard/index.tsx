"use client"
import type { ReactNode } from "react";
// import Header from "./header";
import Footer from "./footer";
import { Box, Button, Stack, Typography } from "@mui/material";
import { usePathname } from 'next/navigation'
import Header from "./header";

export function Layout({ children }: { children: ReactNode }): JSX.Element {

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header />
      <Box flex="1"
        sx={{
          px: {
            xl: "8rem",
            lg: "6rem",
            md: "4rem",
            sm: "3rem",
            xs: "1rem",
          },
          mt: "8rem",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}



import { Stack } from "@mui/material";
import type { ReactNode } from "react";
import { Layout as RootLayout } from "../layouts/root";
import { Layout as MainLayout } from "../layouts/dashboard";

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  return (
    <html lang="en">
      <body >
        <RootLayout>
          <MainLayout>
            {children}
          </MainLayout>
          {/* <NProgress /> */}
        </RootLayout>
      </body>
    </html>
  );
}

export default Layout;

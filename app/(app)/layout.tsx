import { Stack } from "@mui/material";
import type { ReactNode } from "react";
import { Layout as RootLayout } from "../layouts/root";
import { Layout as MainLayout } from "../layouts/dashboard";
import { cookies } from "next/headers";
import { Settings } from "../types";

interface LayoutProps {
  children: ReactNode;
}
const SETTINGS_STORAGE_KEY = "app.settings";

const restoreSettings = (): Settings | undefined => {
  const cookieList = cookies();

  let value: Settings | undefined;

  if (cookieList.has(SETTINGS_STORAGE_KEY)) {
    try {
      const restored = cookieList.get(SETTINGS_STORAGE_KEY);

      if (restored) {
        value = JSON.parse(restored.value);
      }
    } catch (err) {
      console.error(err);
      // If stored data is not a stringified JSON this will fail,
      // that's why we catch the error
    }
  }

  return value;
};

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const settings = restoreSettings();
  return (
    <html lang="en">
      <body >
        <RootLayout settings={settings}>
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

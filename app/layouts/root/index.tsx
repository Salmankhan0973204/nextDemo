"use client"
import { SettingsButton } from '@/app/component/settings/settings-button'
import { SettingsDrawer } from '@/app/component/settings/settings-drawer'
import { SettingsConsumer, SettingsProvider } from '@/app/context'
import { createTheme } from '@/app/theme'
import { Settings } from '@/app/types'
import { Theme, ThemeProvider } from '@mui/material/styles';
import Cookies from "js-cookie";

import React from 'react'
export function Layout({ children , settings }: any): JSX.Element {
  const SETTINGS_STORAGE_KEY = "app.settings";
  const resetSettings = (): void => {
    try {
      Cookies.remove(SETTINGS_STORAGE_KEY);
    } catch (err) {
      console.error(err);
    }
  };

  const updateSettings = (settings: Settings): void => {
    try {
      Cookies.set(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    // <ThemeProvider theme={theme}>
    //   {children}
    // </ThemeProvider>
    <SettingsProvider
      onReset={resetSettings}
      onUpdate={updateSettings}
      settings={settings}
    >
      <SettingsConsumer>
        {(themeSettings) => {
          const theme: Theme = createTheme({
            direction: themeSettings.direction,
            responsiveFontSizes: themeSettings.responsiveFontSizes,
            colorPreset: themeSettings.colorPreset,
            contrast: themeSettings.contrast,
            paletteMode: themeSettings.paletteMode,
            disableButtonsOnLoginAs:
              themeSettings.disableButtonsOnLoginAs,
          });
          return (
            <ThemeProvider theme={theme}>
           
              {/* <AuthInitializer handleTheme={themeSettings.handleUpdate}> */}
                {children}
                <SettingsButton
                  onClick={themeSettings.handleDrawerOpen}
                />
                <SettingsDrawer
                  canReset={themeSettings.isCustom}
                  onClose={themeSettings.handleDrawerClose}
                  onReset={themeSettings.handleReset}
                  onUpdate={themeSettings.handleUpdate}
                  open={themeSettings.openDrawer}
                  values={{
                    direction: themeSettings.direction,
                    responsiveFontSizes:
                      themeSettings.responsiveFontSizes,
                    stretch: themeSettings.stretch,
                    layout: themeSettings.layout,
                    colorPreset: themeSettings.colorPreset,
                    contrast: themeSettings.contrast,
                    paletteMode: themeSettings.paletteMode,
                    navColor: themeSettings.navColor,
                  }}
                />
              {/* </AuthInitializer> */}
              {/* <Toaster /> */}
            </ThemeProvider>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  )
}


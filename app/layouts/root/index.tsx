"use client"
import { createTheme } from '@/app/theme'
import { Theme, ThemeProvider } from '@mui/material/styles'

import React from 'react'
export function Layout({ children }: any): JSX.Element {
  const theme: Theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}


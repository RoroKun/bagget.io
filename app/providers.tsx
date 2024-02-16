// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { baggetGreen } from './customThemes'


const customThemes = extendTheme({
  colors: {
    baggetGreen,
  },
})


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={customThemes}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
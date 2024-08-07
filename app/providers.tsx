// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { bgGreen, bgWhite, bgBlack } from './styles/customThemes'


const customThemes = extendTheme({
  colors: {
    bgGreen,
    bgWhite,
    bgBlack
  },
})


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={customThemes}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
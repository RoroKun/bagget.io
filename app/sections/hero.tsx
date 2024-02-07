'use client'

import {
  Container,
  Stack,
  HStack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Hero() {

    const highlightedText = "13.5 million"
    const headingAlt = "American households are food insecure."


  return (
    <Container
    maxW={'100%'}
    height={'500px'}
    // TODO: clean these comments up
    // backgroundImage={
    //   'url(https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
    // }
    
    // backgroundSize={'cover'}
    // backgroundPosition={'center center'}
    // zIndex={-2}
    >
      <Box
        maxH={'500px'}
        position="absolute"
        inset={0}
        zIndex={-2}
        // TODO: import this shit from the file
        bgImage={"url(https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}
        filter={"brightness(0.35)"}
        // bg="blackAlpha.500" // Or use opacity, filter, or gradient here
      />
      <Container maxW={'7xl'} centerContent>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction="column">
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '10%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'yellow.100',
                  zIndex: -1,
                }}
                zIndex={2}
                color={'yellow.100'}
                fontWeight={700}
                fontSize={{ base: '5xl', sm: '6xl', lg: '8xl' }}
                >
                {highlightedText}
              </Text>
              <br />
              <Text as={'span'} color={'green.100'}>
                {headingAlt}
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              source
            </Text>
          </Stack>
          
          <HStack width={'full'} gap={'25px'}>
            <Button 
              bg={'green.100'}
              variant='solid' 
              color={'green.800'} 
              size={'lg'}
              _hover={{ 
                bg: 'green.800',
                color: 'green.100',
              }}
              _active={{
                bg: 'green.800',
                color: 'green.100',
                transform: 'scale(0.9)',
              }}
            >
              Become part of the solution
            </Button>
            <Button 
              color={'green.100'} 
              size={'lg'}
              _hover={{ 
                bg: 'green.100',
                color: 'green.800',
              }}
              _active={{
                bg: 'green.100',
                color: 'green.800',
                transform: 'scale(0.9)',
              }}
              variant={'ghost'}
            >
              Read more
            </Button>
          </HStack>
          
        </Stack>
      </Container>

    </Container>
  )
}

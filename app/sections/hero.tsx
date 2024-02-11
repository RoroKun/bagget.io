'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import { RedirectLink } from '../components/link'

export default function Hero() {



  return (
    <Container
    maxW={'100%'}
    position={'relative'}
    zIndex={101}
    >
      <Box
        maxH={'100%'}
        position="absolute"
        inset={0}
        zIndex={-2}
        // TODO: import this shit from the file
        // TODO: add parallax
        bgImage={"url(https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}
        filter={"brightness(0.35)"}
      />
      <Container maxW={'7xl'}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          padding={'10% 0'}
        >
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            gap={'40px'}
          >
            <HeroTitle />    
            <RedirectLink
                link='mailto:rohan@bagget.io?cc=alan@bagget.io;cesar@bagget.io'
                title='Sends an email to the Bag/Get team in a new tab'
            >
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
            </RedirectLink>   
          </Flex>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction="column">
            
          </Stack>
        </Flex>
      </Container>

    </Container>
  )
}

function HeroTitle() {

  
  const highlightedText = "13.5 million"
  const headingAlt = "American households are food insecure."
  const source = "- U.S. Department of Agriculture"

  return(
    <Stack
      gap={'20px'}
    >  
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
      >
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
      <Text color={'gray.400'} fontSize={'sm'} fontStyle={'italic'}>
        {source}
      </Text>
    </Stack>

  )
}
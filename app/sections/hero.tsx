'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
import EmailModal from '../components/modal'
import { motion } from "framer-motion"
import { fadeVariant } from '../styles/scrollAnimations'

export default function Hero() {
  return (
    <Container
    maxW={'100%'}
    maxH={'100%'}
    position={'relative'}
    bgGradient={"linear(to-b, bgGreen.700, bgGreen.800)"} 
    zIndex={101}
    >
      <Box
        marginTop={['8%', '5%','2%']}
        borderTopRadius={['3rem', '6rem', '10rem']}
        maxH={['calc(100%-8%)', 'calc(100%-5%)', 'calc(100%-2%)']}
        minW={'100%'}
        position="absolute"
        inset={0}
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        zIndex={-2}
        bgImage={"/hero-img.webp"}
        backgroundSize={'cover'}
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
            alignItems={'center'}
            gap={'40px'}
          >
            <HeroTitle />    
            <motion.div
              variants={fadeVariant({yBot: 5, yTop: 0, duration: 1.1, delay: 0.5})}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            > 
              <EmailModal ctaPhrase='Become part of the solution'/>
            </motion.div>
          </Flex>
        </Flex>
      </Container>
      <Box
          position={'absolute'}
          bgGradient="linear(to-b, transparent, bgGreen.800)"
          height={`15%`}
          width={`100%`}
          bottom={0}
          right={0}
          zIndex={10}
      />
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
        <motion.div
          variants={fadeVariant({yBot: 5, yTop: 0, duration: 1.0})}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          style={{textAlign: 'center'}}
        >
          <Text
            as={'span'}
            width={'100%'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '10%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'green.100',
              zIndex: -1,
            }}
            zIndex={2}
            color={'green.100'}
            fontWeight={700}
            fontSize={{ base: '5xl', sm: '6xl', lg: '8xl' }}
            >
            {highlightedText}
          </Text>
        </motion.div>
        <br />
        <motion.div
          variants={fadeVariant({yBot: 5, yTop: 0, duration: 1.1, delay: 0.5})}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          style={{textAlign: 'center'}}
        >
          <Text as={'span'} color={'bgWhite.50'}>
            {headingAlt}
          </Text>
        </motion.div>
      </Heading>
      <motion.div
        variants={fadeVariant({yBot: 5, yTop: 0, duration: 1.1, delay: 0.5})}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        style={{textAlign: 'center'}}
      >
        <Text color={'gray.400'} fontSize={'sm'} fontStyle={'italic'}>
          {source}
        </Text>
      </motion.div>
    </Stack>

  )
}
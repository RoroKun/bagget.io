'use client'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  } from "@chakra-ui/react";
import { stakeholderData } from "@/data/stakeholders";
import { Blob, StakeholderIcon } from "../components/svgs";
import { motion } from "framer-motion"
import { fadeVariant } from '../styles/scrollAnimations'



export default function Stakeholders() {
  return (
    <Container 
      maxW={"full"} 
      px={0} 
      bgGradient={"radial(bgGreen.700, bgGreen.800)"} 
      position={'relative'} 
      zIndex={-3} 
      paddingBottom={'5%'}
      id="Stakeholders"
    >
      <Container maxW={"7xl"}>
        <Flex justifyContent={'center'} alignItems={'center'} direction={"column"}>
          <Flex
            flex={1}
            justify={'space-between'}
            align={'center'}
            position={'relative'}
            w={'full'}
            flexWrap={['wrap', 'wrap', 'nowrap']}
            overflow={'hidden'}
          >
                <Stack width={'1800px'} marginLeft={['0', '0', '3%']}>
                  <Title />
                  <InfoBlurb />
                </Stack>
                <Stack position={'relative'} width={'100%'} height={'100%'} marginRight={['0', '0', '3%']}>
                  <motion.div
                    variants={fadeVariant({yBot: 0, yTop: 0, duration: 1.25, delay: 0.75})}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <Blob
                      w={['100%', '100%', '125%']}
                      h={['100%', '100%', '125%']}
                      position={'absolute'}
                      top={['0%', '-10%', '-20%']}
                      right={['0%', '0%', '0%']}
                      zIndex={-1}
                      color={useColorModeValue('green.900', 'green.900')}
                    />
                  </motion.div>
                  <Box
                    position={'relative'}
                    height={'full'}
                    width={'full'}
                    marginBottom={["15%", "0%", "0%"]}
                  >
                    <motion.div
                      variants={fadeVariant({yBot: 0, yTop: 0, duration: 0.5, delay: 0.75})}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true}}
                    >
                      <Image
                        alt={'Person working in a pantry packaging food'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={"/stakeholder-img.webp"}
                        position={'relative'}
                        left={'50%'}
                        transform={'translateX(-50%)'}
                      />
                    </motion.div>
                  </Box>
                </Stack>
            </Flex>
        </Flex>
      </Container>
    </Container>
  );
}

function Title() {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 15, md: 23 }}
      direction={{ base: "column", md: "row" }}
      textAlign={['center', 'center' ,'left']}
      position={'relative'}
      zIndex={-2}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <motion.div
            variants={fadeVariant({yBot: 0, yTop: 0, duration: 0.5, delay: 0.75})}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text as={"span"} color={"bgWhite.50"}>
              There are{" "}
            </Text>
            <Text
              as={"span"}
              fontStyle={'italic'}
              color={'green.100'}
            >
              three
            </Text>
            <Text as={"span"} color={"bgWhite.50"}>
              {" "}impacted parties.
            </Text>
          </Heading>
        </motion.div>
      </Stack>
    </Stack>
  );
}

function InfoBlurb() {

  return (
    <motion.div
      variants={fadeVariant({yBot: 5, yTop: 0, duration: 0.5, delay: 0.75})}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true}} 
    >
    <Stepper
      size="lg"
      index={3}
      orientation="vertical"
      marginLeft={['0', '7%', '0']}
      colorScheme="bgWhite"    >
      {stakeholderData.map((stakeholder, index) => (
            <Step key={`stakeholder=${index}`}>
              <StepIndicator>
                <StepStatus 
                  complete={<StakeholderIcon stakeholder={stakeholder.title} 
                  props={{w: '70%', h: '70%'}}/>} 
                  incomplete={<></>} 
                  active={<></>} 
                />
              </StepIndicator>
                <Box paddingLeft={'10px'} paddingBottom={'25px'} maxW={'400px'}>
                      <Heading
                        fontWeight={600}
                        fontStyle={'italic'}
                        fontSize={{ base: "lg", sm: "xl", lg: "3xl" }}
                        color={'bgWhite.50'}
                      >
                        {stakeholder.title}
                      </Heading>
                    <Text fontSize={{ base: "md", sm: "lg", lg: "xl" }} color={'bgWhite.100'}>{stakeholder.description}</Text>
                </Box>
              <StepSeparator />
            </Step>
      ))}
    </Stepper>
      </motion.div>
  );
}
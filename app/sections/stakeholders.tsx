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
import { Blob } from "../components/svgs";
import { motion } from "framer-motion"
import { fadeVariant } from '../styles/scrollAnimations'



export default function Stakeholders() {
  return (
    <Container 
      maxW={"full"} 
      px={0} 
      bgColor={"green.50"} 
      position={'relative'} 
      zIndex={-3} 
      paddingBottom={'5%'}
      id="Stakeholders"
          >
      <Title />
      <Container maxW={"7xl"}>
        <Flex justifyContent={'center'} alignItems={'center'} direction={"column"}>
          <Flex
            flex={1}
            justify={'space-between'}
            align={'center'}
            position={'relative'}
            w={'full'}
            gap={'10%'}
            flexWrap={['wrap', 'wrap', 'nowrap']}
            overflow={'hidden'}
          >
              <InfoBlurb />
                <motion.div
                  variants={fadeVariant({yBot: 0, yTop: 0, duration: 1.1, delay: 0.2})}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Blob
                    w={['70%', '80%', '60%']}
                    h={'100%'}
                    position={'absolute'}
                    top={['20%', '20%', '0%']}
                    right={['10%', '10%', '0%']}
                    zIndex={-1}
                    color={useColorModeValue('green.100', 'green.400')}
                  />
                </motion.div>
                <Box
                  position={'relative'}
                  height={'full'}
                  width={'full'}
                  marginTop={["0%", "10%", "0%"]}
                  marginBottom={["25%", "20%", "0%"]}
                >
                <motion.div
                  variants={fadeVariant({yBot: 0, yTop: 0, duration: 1.1, delay: 0.2})}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Image
                    alt={'Person working in a pantry packaging food'}
                    fit={'cover'}
                    align={'center'}
                    w={'80%'}
                    h={'80%'}
                    src={"/stakeholder-img.webp"}
                    position={'relative'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                  />
              </motion.div>
                </Box>
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
      bgColor={"green.800"}
      textAlign={'center'}
      marginBottom={50}
      position={'relative'}
      zIndex={-2}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text as={"span"} color={"green.100"}>
            There are{" "}
          </Text>
          <Text
            as={"span"}
            fontStyle={'italic'}
            color={'yellow.100'}
          >
            three
          </Text>
          <Text as={"span"} color={"green.100"}>
            {" "}impacted parties.
          </Text>
        </Heading>
      </Stack>
    </Stack>
  );
}

function InfoBlurb() {

  return (
    <Stepper
      size="lg"
      index={3}
      orientation="vertical"
      height={["300px", "250px", "400px"]}
      colorScheme="baggetGreen"
    >
      {stakeholderData.map((stakeholder, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<></>} incomplete={<></>} active={<></>} />
          </StepIndicator>
          <Box flexShrink="0" width={'90%'}>
              <motion.div
                variants={fadeVariant({yBot: 50, yTop: 0, duration: 1.1, delay: 0.5})}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                
              </motion.div>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "lg", sm: "xl", lg: "3xl" }}
                  color={'green.800'}
                >
                  {stakeholder.title}
                </Heading>
              <Text fontSize={{ base: "md", sm: "lg", lg: "xl" }} color={'green.800'}>{stakeholder.description}</Text>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}


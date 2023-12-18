'use client'
import {
  Container,
  Stack,
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
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  {
    title: "Food Banks",
    description:
      "These are wholesale distributors who serve up to 60,000 pantries nationwide.",
  },
  {
    title: "Food Pantries",
    description:
      "The neighborhood sites with a selection of foods for locals to utilize.",
  },
  {
    title: "The Community",
    description:
      "Your next door neighbor, who fights to make ends meet and feed their family.",
  },
];

export default function Stakeholders() {
  return (
    <Container maxW={"7xl"}>
      <Title />
      <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <InfoBlurb />
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('green.50', 'green.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            {/* <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
            /> */}
          </Box>
        </Flex>
    </Container>
  );
}

function Title() {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text as={"span"} color={"green.400"}>
            But to understand the{" "}
          </Text>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "green.400",
              zIndex: -1,
            }}
          >
            problem,
          </Text>
          <br />
          <Text as={"span"} color={"green.400"}>
            You need to understand the{" "}
          </Text>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "green.400",
              zIndex: -1,
            }}
          >
            people...
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
      height="400px"
      colorScheme="green"
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<></>} incomplete={<></>} active={<></>} />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>
              <Heading
                fontWeight={500}
                fontSize={{ base: "lg", sm: "xl", lg: "3xl" }}
              >
                {step.title}
              </Heading>
            </StepTitle>
            <StepDescription>
              <Text fontSize={{ base: "md", sm: "lg", lg: "xl" }}>{step.description}</Text>
            </StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    )
  }
import { Text, Box, Container, Heading, Image, VStack, Button, Flex } from "@chakra-ui/react";

export default function Contact() {
    return(
        <Container 
            maxW={'full'} 
            height={"90vh"}
            bg={'green.800'}
            position={'relative'}
            padding={0}
        >
            <Box
                maxH={'100%'}
                maxHeight={'100%'}
                position="absolute"
                inset={0}
                filter={"brightness(0.2)"}
                overflow={'hidden'}
                zIndex={2}
            >
                <Box
                    position={'absolute'}
                    bgGradient="linear(to-t, transparent, green.50)"
                    height={`15%`}
                    width={`100%`}
                    top={0}
                    right={0}
                    zIndex={10}
                />
                <video height="100%" width="100%"  muted loop autoPlay>
                    <source src="packing-food.webm" type="video/webm" />
                    {/* TODO: replace with a loading spinner */}
                    Your browser does not support the video tag.
                </video>
            </Box>
            <Container maxW={"7xl"} height={"100%"} position={"relative"} zIndex={10}>
                <Flex
                    height={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    gap={"50px"}
                >
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text as={"span"} color={"green.100"}>
                            We need{" "}
                        </Text>
                        <Text
                            as={"span"}
                            fontStyle={'italic'}
                            color={'yellow.100'}
                        >
                            your
                        </Text>
                        <Text as={"span"} color={"green.100"}>
                            {" "}help.
                        </Text>
                    </Heading>
                    <Text
                        width={'80%'}
                        color={"green.100"}
                        fontSize={{ base: "md", sm: "lg", lg: "xl" }}
                        textAlign={"center"}
                    >
                        To truly create an impactful solution we need to hear everyone’s 
                        perspective. If you or someone you know has helped orchestrate 
                        Food Banks or Pantries - or if you just want to talk to us! 
                        Then we would love to...
                    </Text>
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
                        chat today!
                    </Button>
                </Flex>
            </Container>  
            <Box
                position={'absolute'}
                bgGradient="linear(to-b, transparent, green.800)"
                height={`5%`}
                width={`100%`}
                bottom={0}
                right={0}
                zIndex={10}
            />
        </Container>
    );
}
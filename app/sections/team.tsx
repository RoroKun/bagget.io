import {
    Box,
    Container,
    Text,
    Card,
    Heading,
    Image,
    VStack,
    Stack,
    SimpleGrid,
  } from '@chakra-ui/react'

import { teamData } from '../content/team';

export default function Team() {

    return (
        <Container 
            maxW={"full"} 
            bg={'green.50'}
            paddingBottom={'5%'}
        >
            <Container maxW={"8xl"} bg={'green.800'} borderRadius={"100px 40px 100px 40px"}>
                <Container maxW={"7xl"} >
                    <VStack spacing='24px' width={"full"} padding={'5% 0'}>
                        <Title/>
                        <TeamMembers />
                    </VStack>
                </Container>
            </Container>
        </Container>
    )
}

function Title() {
    return (
        <VStack gap={'40px'}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                <Text as={"span"} color={"green.100"}>
                    This is where{" "}
                </Text>
                <Text
                    as={"span"}
                    fontWeight={700}
                    fontStyle={'italic'}
                    color={'yellow.100'}
                >
                    Bag/Get
                </Text>
                <Text as={"span"} color={"green.100"}>
                    {" "}comes in.
                </Text>
                </Heading>
                <Text
                    maxW={'60%'}
                    textAlign={'center'}
                    fontSize={"xl"}
                    color={'green.100'}
                >
                    We are Cal State Fullerton CS majors looking to create custom solutions for this ecosystem 
                    - So that our communities can Bag their troubles and Get one step close to food security.
                </Text>
        </VStack>
    );
}

function TeamMembers() {
    return (
        <SimpleGrid columns={2} spacing={10}>
            {teamData.map((member) => 
                <Box
                    position={'relative'}
                    height={'300px'}
                    width={'450px'}
                >
                    <Image
                        alt={`${member.name} picture`}
                        fit={'cover'}
                        align={'center'}
                        borderRadius={'20px'}
                        w={'100%'}
                        h={'100%'}
                        src={member.image}
                    />
                    <Box
                        bg={'green.100'}
                        position={'absolute'}
                        top={'75%'}
                        left={'9%'}
                        textAlign="center"
                        width={'80%'}
                        height={'30%'}
                        zIndex={4}
                        color={'green.100'}
                    >
                        
                        <Text
                            position={'relative'}
                            zIndex={5}
                            color={'green.800'}
                        >
                            yo mama
                        </Text>
                    </Box>
                </Box>
            )}
        </SimpleGrid>
    );
}
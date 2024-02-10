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
    HStack,
    useColorModeValue,
  } from '@chakra-ui/react'

import { teamData } from '../data/team';
import { Email, LinkedIn } from '../components/svgs';
import { RedirectLink } from '../components/link';

export default function Team() {

    return (
        <Container 
            maxW={"full"} 
            bg={'green.50'}
            paddingBottom={'5%'}
            id="Team"
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
        <SimpleGrid columns={2} spacing={20}>
            {teamData.map((member, id) => 
                <Box
                    position={'relative'}
                    height={'475px'}
                    width={'400px'}
                    key={id}
                >
                    <Image
                        alt={`${member.name} picture`}
                        fit={'cover'}
                        objectPosition={'50% 0%'}
                        align={'center'}
                        borderRadius={'40px'}
                        w={'100%'}
                        h={'100%'}
                        src={member.image}
                    />
                    <Box
                        bg={'green.100'}
                        position={'absolute'}
                        top={'65%'}
                        left={'9%'}
                        textAlign="center"
                        borderRadius={'20px'}
                        width={'80%'}
                        zIndex={4}
                        color={'green.100'}
                    >
                        <VStack color={'green.800'} padding={'20px 30px'}>
                            <VStack
                                _after={{
                                    content: "''",
                                    width: '80%',
                                    height: '2px',
                                    position: 'absolute',
                                    top: '42%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    bg: 'green.800',
                                    borderRadius: '20px',
                                    zIndex: -1,
                                }}
                                paddingBottom={'10px'}
                            >
                                <Heading
                                    fontSize={'2xl'}
                                >
                                    {member.name}
                                </Heading>
                                <Text
                                    position={'relative'}
                                    fontSize={'xs'}
                                >
                                    {member.title}
                                </Text>
                            </VStack>
                            <VStack
                                justifyContent={'flex-start'}
                                alignItems={'flex-start'}
                            >
                                <RedirectLink
                                    link={`https://www.linkedin.com/in/${member.linkedIn}/`}
                                    title={`Opens ${member.name}'s LinkedIn profile in a new tab`}
                                >
                                    <HStack
                                        height={'40px'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        gap={'10px'}
                                    >
                                            <Box
                                                width={'30px'}
                                                height={'30px'}
                                            >
                                                <LinkedIn
                                                    w={'100%'}
                                                    h={'100%'}
                                                />
                                            </Box>
                                            <Text>
                                                {member.linkedIn}
                                            </Text>
                                    </HStack>
                                </RedirectLink>
                                <RedirectLink
                                    link={`mailto: ${member.email}`}
                                    title={`Sends an email to ${member.name} in a new tab`}
                                >
                                    <HStack
                                        height={'40px'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        gap={'10px'}
                                    >
                                        <Box
                                            width={'30px'}
                                            height={'30px'}
                                        >
                                            <Email
                                                w={'100%'}
                                                h={'100%'}
                                            />
                                        </Box>
                                        <Text>
                                            {member.email}
                                        </Text>
                                    </HStack>
                                </RedirectLink>
                            </VStack>
                        </VStack>
                    </Box>
                </Box>
            )}
        </SimpleGrid>
    );
}
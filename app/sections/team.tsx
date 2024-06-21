"use client"

import {
    Box,
    Container,
    Text,
    Heading,
    Image,
    VStack,
    SimpleGrid,
    HStack,
    Skeleton,
  } from '@chakra-ui/react'

import { teamData } from '@/data/team';
import { BackgroundLogo, Email, LinkedIn } from '../components/svgs';
import { RedirectLink } from '../components/link';
import { motion } from "framer-motion"
import { fadeVariant } from '../styles/scrollAnimations'

export default function Team() {

    return (
        <Container 
            maxW={"full"} 
            bgGradient={"radial(circle at top, bgGreen.800 30%, bgGreen.900)"} 
            paddingBottom={'5%'}
            id="Team"
            position="relative"
            zIndex={10}
        >
            <Container 
                maxW={"8xl"} 
                bgGradient={"linear(to-t, green.800, bgGreen.700)"} 
                borderRadius={[
                    "50px 35px",
                    "100px 40px",
                    "100px 40px",
                ]}
            >
                <Container maxW={"7xl"} >
                    <VStack 
                        spacing='24px' 
                        width={"full"} 
                        paddingTop={['10%', '5%', '5%']} 
                        paddingBottom={['25%', '15%', '15%']}
                    >
                        <motion.div
                            variants={fadeVariant({yBot: 0, yTop: 0, duration: 0.5})}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Title/>
                        </motion.div>
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
                fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
                textAlign={'center'}
            >
                <Text as={"span"} color={"bgWhite.50"}>
                    This is where{" "}
                </Text>
                <Text
                    as={"span"}
                    fontWeight={700}
                    fontStyle={'italic'}
                    bgGradient={"linear(to-l, green.300 5%, green.100)"}
                    bgClip='text'
                >
                    Bag/Get
                </Text>
                <Text as={"span"} color={"bgWhite.50"}>
                    {" "}comes in.
                </Text>
                </Heading>
                <Text
                    maxW={['90%', '80%', '60%']}
                    textAlign={'center'}
                    fontSize={{ base: "sm", sm: "lg", lg: "xl" }}
                    color={'bgWhite.50'}
                >
                    We are Cal State Fullerton CS majors developing custom solutions for this ecosystem 
                    - So that our communities can Bag their troubles and Get one step closer to food security.
                </Text>
        </VStack>
    );
}

function TeamMembers() {
    return (
        <Container maxW={"full"} position={'relative'}>
            <Box 
                position={'absolute'} 
                width={'full'} 
                height={'full'} 
                bottom="50%"
                left="50%"
                transform="translate(-50%, 50%)"
            >
                <BackgroundLogo
                    w={'100%'}
                    h={'100%'}
                />
            </Box>
            <SimpleGrid columns={[1, 1, 2]} rowGap={20} columnGap={10} width={'full'} justifyItems="center" alignItems="center">
                {teamData.map((member, id) => 
                    <Box
                        position={'relative'}
                        height={['275px', '375px', '325px', '375px']}
                        width={['250px', '350px', '300px', '350px']}
                        key={id}
                    >
                        <motion.div
                            variants={fadeVariant({yBot: 100, yTop: 0, duration: 0.75})}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true}}
                            style={{width:'100%', height:'100%'}}
                            whileHover={{
                                scale: 0.97,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Image
                                alt={`${member.name} picture`}
                                fit={'cover'}
                                objectPosition={'50% 0%'}
                                align={'center'}
                                borderRadius={'40px'}
                                bg={'green.200'}
                                w={'100%'}
                                h={'100%'}
                                src={member.image}
                                fallback={
                                    <Box
                                        w={'100%'}
                                        h={'100%'}
                                    > 
                                        <Skeleton
                                            borderRadius={'40px'}
                                            height={'100%'}
                                            startColor="green.200"
                                            endColor="green.400"
                                        >
                                            <Text> loading image... </Text>
                                        </Skeleton>
                                    </Box>
                                }
                            />
                            <Box
                                bgGradient={member.highlightGradient}
                                position={'absolute'}
                                top={'65%'}
                                left={'9%'}
                                textAlign="center"
                                borderRadius={'20px'}
                                width={'80%'}
                                zIndex={4}
                            >
                                <VStack color={'bgBlack.50'} padding={['10px 15px','20px 30px','20px 30px']}>
                                    <VStack
                                        
                                        paddingBottom={'10px'}
                                    >
                                        <Heading
                                            fontSize={['lg','xl', 'lg','2xl']}
                                        >
                                            {member.name}
                                        </Heading>
                                        <Text
                                            position={'relative'}
                                            fontSize={['10px','xs', '10px', 'xs']}
                                            _after={{
                                                content: "''",
                                                width: ['150px','200px','200px'],
                                                height: '2px',
                                                position: 'absolute',
                                                bottom: '-70%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                bg: 'bgBlack.50',
                                                borderRadius: '20px',
                                                zIndex: -1,
                                            }}
                                        >
                                            {member.title}
                                        </Text>
                                    </VStack>
                                    <VStack
                                        justifyContent={'flex-start'}
                                        alignItems={'flex-start'}
                                    >
                                        <RedirectLink
                                            link={`mailto: ${member.email}`}
                                            title={`Sends an email to ${member.name} in a new tab`}
                                        >
                                            <HStack
                                                height={['20px','40px','40px']}
                                                justifyContent={'center'}
                                                alignItems={'center'}
                                                gap={'10px'}
                                            >
                                                <Box
                                                    width={['20px','30px','30px']}
                                                    height={'30px'}
                                                >
                                                    <Email
                                                        w={'100%'}
                                                        h={'100%'}
                                                    />
                                                </Box>
                                                <Text
                                                    fontSize={{ base: "xs", sm: "sm", lg: "md" }}
                                                >
                                                    {member.email}
                                                </Text>
                                            </HStack>
                                        </RedirectLink>
                                        
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
                                                        width={['20px','30px','30px']}
                                                        height={'30px'}
                                                    >
                                                        <LinkedIn
                                                            w={'100%'}
                                                            h={'100%'}
                                                        />
                                                    </Box>
                                                    <Text
                                                        fontSize={{ base: "xs", sm: "sm", lg: "md" }}
                                                    >
                                                        {member.linkedIn}
                                                    </Text>
                                            </HStack>
                                        </RedirectLink>
                                        
                                    </VStack>
                                </VStack>
                            </Box>
                        </motion.div>
                    </Box>
                )}
            </SimpleGrid>
        </Container>
    );
}
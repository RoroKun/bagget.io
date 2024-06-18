'use client'

import {
    Box,
    Container,
    Text,
    Card,
    Heading,
    Image,
    VStack,
    Stack,
    Skeleton,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
import { challengesData } from '@/data/challenges'
import { PointIcon } from '../styles/customThemes'
import { motion } from "framer-motion"
import { fadeVariant } from '../styles/scrollAnimations'


export default function Challenges() {

    return (
        <Container 
            maxW={"full"} 
            bgGradient={"linear(to-b, green.50, green.100)"} 
            padding={['10% 0%', '10% 0%', '2% 0%']}
            id='Challenges'
        >
            <Container maxW={"7xl"} >
                <VStack spacing='24px' width={"full"}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    textAlign={'center'}
                >
                <motion.div
                    variants={fadeVariant({yBot: 0, yTop: 0, duration: 0.5})}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true}}
                >
                    <Text as={"span"} color={"green.900"}>
                        However, under the surface...
                    </Text>
                </motion.div>
                </Heading>
                    {challengesData.map((challenge, i) => {
                        return (
                            <motion.div
                                variants={fadeVariant({yBot: 50, yTop: 0, duration: 0.75})}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true}}
                                key={`marquee-card-${i}`}
                                style={{width:'100%'}}
                            >
                                <Card 
                                    bgColor={challenge.bgColor} 
                                    padding={['10% 15%', '5% 15%', '5% 10%']}
                                    borderRadius={['40px', '80px', '80px']}
                                >
                                    <Stack 
                                        direction={[
                                            `${i % 2 == 0 ? 'column' : 'column-reverse'}`,
                                            `${i % 2 == 0 ? 'column' : 'column-reverse'}`,
                                            `${i % 2 == 0 ? 'row' : 'row-reverse'}`
                                        ]} 
                                        justifyContent={'space-between'} 
                                        alignItems={'center'} 
                                        width={'full'}
                                        height={'full'}
                                        gap={`30px`}
                                        key={`content-wrapper-${i}`}
                                    >
                                        <VStack 
                                            maxWidth={['450px','450px','350px','450px']} 
                                            alignItems={'self-start'} 
                                            key={`text-content-${i}`}
                                        >
                                            <Heading 
                                                lineHeight={1.1}
                                                fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                                                paddingBottom="10px"
                                            >
                                                <Text as={"span"} color={"green.800"}>
                                                    {challenge.title}
                                                </Text>
                                            </Heading>
                                            <Blurb blurbPoints={challenge.blurb} cardNum={i}/>
                                        </VStack>
                                        <Box
                                            position={'relative'}
                                            height={['150px', '300px', '300px']}
                                            width={['100%', '100%', '450px']}
                                            overflow={'hidden'}
                                            key={`image-box-${i}`}
                                        >
                                            <Image
                                            alt={`${challenge.title} picture`}
                                            fit={'cover'}
                                            align={'center'}
                                            borderRadius={'20px'}
                                            w={'100%'}
                                            h={'100%'}
                                            src={challenge.image}
                                            key={`image-${i}`}
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
                                        </Box>
                                    </Stack>
                                </Card>
                            </motion.div>
                        )
                    })}
                </VStack>
            </Container>
        </Container>
    )
}

function Blurb({blurbPoints, cardNum}: {blurbPoints: string[]; cardNum: number}) {
    return (
        <List spacing={3}>
            {blurbPoints.map((point, i) => 
                <ListItem key={`card-${cardNum}-point-${i}`}>
                    <ListIcon as={PointIcon} color="green.800"/>
                    <Text 
                        as={"span"} 
                        color={"green.800"} 
                        fontSize={{ base: "sm", sm: "lg", lg: "xl" }}
                        fontWeight={400}
                    >
                        {point}
                    </Text>
                </ListItem>
            )}
        </List>
    )
}
"use client"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
    Flex,
    Heading,
    Image
  } from '@chakra-ui/react'

import { useState } from 'react'

interface challenge {
    title: string;
    accordianTitle: string;
    blurb: string;
    image: string;
}

const challengesData: challenge[] = [
    {
        title: "Food Banks",
        accordianTitle: "struggle to...",
        blurb: "...collect data from & communicate with all partnered pantries. Instead of having a streamlined way of maintaining regular & comprehensive communication with their partner agencies, many food banks still rely on personnel to handle relationships with dozens of such pantries each - a strenuous, and inefficient process.",
        image: "/alan-hs.webp"
    },
    {
        title: "Food Pantries",
        accordianTitle: "are faced with...",
        blurb: "redundant supplies - leading to wastage - whilst also not stocking the items their community wants. Despite evidence that the client-choice model provides a more dignifying experience for the community whilst generating less food waste, pantries often cannot adopt this model due to a dearth of quality software.",
        image: "/cesar-hs.webp"
    },
    {
        title: "The Community",
        accordianTitle: "feels frustrated with...",
        blurb: "...the difficulty to find info, being unable to schedule appointments in advance, and having no way of receiving updates. In the end, they turn away due to the substandard experience they face.",
        image: "/rohan-hs.webp"
    }
]


export default function Challenges() {
    const [challenge, setChallenge] = useState<challenge>(challengesData[0])

    return (
        <Container maxW={"7xl"}>
            <Flex justifyContent={'center'} alignItems={'center'} direction={"column"} gap={'40px'}>
                
            <Box
                position={'relative'}
                height={'full'}
                width={'full'}
                overflow={'hidden'}
                marginTop={["20%", "10%", "0%"]}
                >
                <Image
                    alt={`${challenge.title} backsplash image`}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'350px'}
                    position={'relative'}
                    zIndex={-1}
                    src={challenge.image}
                />
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    position={'absolute'}
                    zIndex={1}
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"  // Set text color as needed
                >
                    However, the {challenge.title}'s challenges are...
                </Heading>
                </Box>
                <Accordion defaultIndex={[0]}>

                    {challengesData.map((challenge, id) => {
                        return (
                            <AccordionItem key={id}>
                                <h2 onClick={() => setChallenge(challenge)}>
                                    <AccordionButton>
                                        <Box 
                                            as="span" 
                                            flex='1' 
                                            textAlign='left' 
                                            fontWeight={600}
                                            fontSize={{ base: "lg", sm: "xl", lg: "3xl" }}
                                        >
                                            {challenge.title} {challenge.accordianTitle}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "md", sm: "lg", lg: "xl" }}>
                                {challenge.blurb}
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </Flex>
        </Container>
    )
}
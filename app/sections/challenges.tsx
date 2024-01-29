"use client"

import {
    Box,
    Container,
    Text,
    Card,
    Heading,
    Image,
    VStack,
    Stack,
  } from '@chakra-ui/react'
// TODO: move data to file in /content
interface challenge {
    title: string;
    accordianTitle: string;
    blurb: string;
    image: string;
    bgColor: string;
}

const challengesData: challenge[] = [
    {
        title: "Food Banks",
        accordianTitle: "struggle to...",
        blurb: "...collect data from & communicate with all partnered pantries. Instead of having a streamlined way of maintaining regular & comprehensive communication with their partner agencies, many food banks still rely on personnel to handle relationships with dozens of such pantries each - a strenuous, and inefficient process.",
        image: "/fb-challenge.webp",
        bgColor: 'green.100'
    },
    {
        title: "Food Pantries",
        accordianTitle: "are faced with...",
        blurb: "redundant supplies - leading to wastage - whilst also not stocking the items their community wants. Despite evidence that the client-choice model provides a more dignifying experience for the community whilst generating less food waste, pantries often cannot adopt this model due to a dearth of quality software.",
        image: "/fp-challenge.webp",
        bgColor: 'green.200'
    },
    {
        title: "The Community",
        accordianTitle: "feels frustrated with...",
        blurb: "...the difficulty to find info, being unable to schedule appointments in advance, and having no way of receiving updates. In the end, they turn away due to the substandard experience they face.",
        image: "/community-challenge.webp",
        bgColor: 'green.100'
    }
]


export default function Challenges() {

    return (
        <Container 
            maxW={"full"} 
            bg={'green.50'}
            paddingBottom={'5%'}
        >
            <Container maxW={"7xl"} >
                <VStack spacing='24px' width={"full"}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                    <Text as={"span"} color={"green.900"}>
                        However, under the surface...
                    </Text>
                </Heading>
                    {challengesData.map((challenge, i) => {
                        return (
                            <Card 
                                width={"full"} 
                                bgColor={challenge.bgColor} 
                                height={['200px', '400px']}
                                key={i}
                                borderRadius={'80px'}
                            >
                                <Stack direction={['column', 'row']} justifyContent={'space-around'} alignItems={'center'} height={'full'}>
                                    <VStack maxWidth={'450px'} alignItems={'self-start'}>
                                        <Heading 
                                            lineHeight={1.1}
                                        >
                                            <Text as={"span"} color={"green.800"}>
                                            {challenge.title} {" "}
                                            </Text>
                                            <Text as={"span"} color={"green.800"}>
                                            {challenge.accordianTitle}
                                            </Text>
                                        </Heading>
                                        <Text 
                                            as={"span"} 
                                            color={"green.800"} 
                                            fontSize={"xl"}
                                            fontWeight={400}
                                        >
                                            {challenge.blurb}
                                        </Text>
                                    </VStack>
                                    <Box
                                        position={'relative'}
                                        height={'300px'}
                                        width={'450px'}
                                        overflow={'hidden'}
                                        // marginTop={["20%", "10%", "0%"]}
                                    >
                                        <Image
                                        alt={`${challenge.title} picture`}
                                        fit={'cover'}
                                        align={'center'}
                                        borderRadius={'20px'}
                                        w={'100%'}
                                        h={'100%'}
                                        src={challenge.image}
                                        />
                                    </Box>
                                </Stack>
                            </Card>
                        )
                    })}
                </VStack>
            </Container>
        </Container>
    )
}
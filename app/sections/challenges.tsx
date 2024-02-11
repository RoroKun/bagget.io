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
  } from '@chakra-ui/react'
import { challengesData } from '../data/challenges'


export default function Challenges() {

    return (
        <Container 
            maxW={"full"} 
            bg={'green.50'}
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
                    <Text as={"span"} color={"green.900"}>
                        However, under the surface...
                    </Text>
                </Heading>
                    {challengesData.map((challenge, i) => {
                        return (
                            <Card 
                                width={"full"} 
                                bgColor={challenge.bgColor} 
                                padding={['10% 15%', '5% 15%', '5% 10%']}
                                key={`marquee-card-${i}`}
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
                                            fontSize={{ base: "sm", sm: "lg", lg: "xl" }}
                                            fontWeight={400}
                                        >
                                            {challenge.blurb}
                                        </Text>
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
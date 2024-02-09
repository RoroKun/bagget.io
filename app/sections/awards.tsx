'use client'

import { Box, Image, Text, Container, Heading, HStack, Flex, VStack, Button } from "@chakra-ui/react";
import { awardData, awardsData } from "../data/awards";
import { motion } from "framer-motion";


export default function Awards() {

    return (
           
        <Container 
            maxW={'full'} 
            bg={'green.50'}
            padding={0}
        >
            <Container maxW={"8xl"} position={'relative'} overflowX={'hidden'}>
                <Title />
                <Marquee />
                {/* <CTA /> */}
            </Container>
        </Container>
    );

}

function Title() {
    return(
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            textAlign={'center'}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            paddingBottom={'5%'}
        >
            <Text as={"span"} color={"green.900"}>
                See how far we've come
            </Text>
        </Heading>
    );
}

function Marquee () {
    const imageWidth = 625;
    const imageHeight = imageWidth * (2/3);

    const marqueeLength = imageWidth * (awardsData.length / 2);

    return(
        <>
            <Box
                position={'absolute'}
                bgGradient="linear(to-r, green.50, transparent)"
                height={`100%`}
                width={`40px`}
                top={0}
                left={0}
                zIndex={10}
            />
            <motion.div
                animate={{x: [ `calc(0% - 0px)`, `calc(0% - ${marqueeLength}px)`]}}
                transition={{ duration: 15, repeat: Infinity, ease: "linear"}}
                // TODO: temporary fix until I make a page for the CTA
                style={{ paddingBottom: '5%' }}
            >
                <Flex
                    as={"div"}
                    width={`${imageWidth * awardsData.length}px`}
                    position={'sticky'}
                    top={'20px'}
                >
                    {awardsData.map((award: awardData, id: number) => 
                        <VStack> 
                            <Box
                                position={'relative'}
                                height={`${imageHeight}px`}
                                width={`${imageWidth}px`}
                                key={id}
                            >
                                {/* TODO: add fallback loading spinner */}
                                <Image
                                    alt={award.imgAlt}
                                    borderRadius={'40px'}
                                    fit={'cover'}
                                    align={'center'}
                                    w={'90%'}
                                    h={'90%'}
                                    src={award.img}
                                    position={"relative"}
                                    left={"50%"}
                                    transform={'translateX(-50%)'}
                                />
                            </Box>
                            <VStack
                                color={"green.800"}
                            >
                                {/* TODO: make link redirect to new page */}
                                <Heading>
                                    {award.eventName}
                                </Heading>
                                <HStack>
                                    <Text>{award.location} ·</Text>{" "}
                                    <Text>{award.date} ·</Text>{" "}
                                    <Text>{award.placement}</Text>
                                </HStack>
                            </VStack>
                        </VStack>

                    )}
                </Flex>
            </motion.div>  
            <Box
                position={'absolute'}
                bgGradient="linear(to-r, transparent, green.50)"
                height={`100%`}
                width={`40px`}
                top={0}
                right={0}
                zIndex={10}
            />
        </>
    )
}

function CTA() {
    return(
        <Flex width={"full"} padding={'5% 0'} justifyContent={'center'} alignItems={'center'}>
            <Button 
                bg={'green.800'}
                variant='solid' 
                color={'green.100'} 
                size={'lg'}
                _hover={{ 
                    bg: 'green.100',
                    color: 'green.800',
                }}
                _active={{
                    bg: 'green.100',
                    color: 'green.800',
                    transform: 'scale(0.9)',
                }}
            >
                See our full story
            </Button>
        </Flex>
    )
}
'use client'

import { Box, Image, Text, Container, Heading, HStack, Flex } from "@chakra-ui/react";
import { awardData, awardsData } from "../data/awards";
import { motion, useScroll } from "framer-motion";

export default function Awards() {
    const { scrollYProgress } = useScroll();
    const imageSize = 675;
    const flexGap = 75;

    return (
            <Container 
                maxW={'full'} 
                height={`${imageSize * awardsData.length}px`}
                bg={'green.50'}
                // paddingBottom={'5%'}
                overflow={"hidden"}
                position={'relative'}
            >
                <>
                    <Heading>
                        asdf
                    </Heading>
                    <motion.div
                        
                        style={{ position: "absolute", top: scrollYProgress, zIndex: 10 }}
                    >
                        <Flex
                            as={"div"}
                            position={'sticky'}
                            // top={`${scrollYProgress}px`} 
                            width={`${imageSize * awardsData.length}px`}
                            gap={`${flexGap}px`}
                            height={'475px'}
                        >
                            {awardsData.map((award: awardData, id: number) => 
                                <Box
                                    position={'relative'}
                                    height={'475px'}
                                    width={`${imageSize}px`}
                                    key={id}
                                >
                                    <Image
                                        alt={`${award.eventName} picture`}
                                        fit={'cover'}
                                        align={'center'}
                                        borderRadius={'40px'}
                                        w={'100%'}
                                        h={'100%'}
                                        src={award.img}
                                    />
                                    
                                </Box>
                            )}
                        </Flex>
                    </motion.div>
                </>
                
            </Container>
    );

}
'use client'

import { Text, Box, Container, Heading, Flex } from "@chakra-ui/react";
import Video from "../components/video";
import EmailModal from "../components/modal";
import { motion } from "framer-motion"
import { fadeVariant } from '../styles/scrollAnimations'


export default function Contact() {
    
    return(
        <Container 
            maxW={'full'} 
            height={["90vh","90vh","60vh","90vh"]}
            bg={'bgGreen.700'}
            position={'relative'}
            padding={0}
        >
            <Box
                height={'100%'}
                position="absolute"
                inset={0}
                filter={"brightness(0.2)"}
                overflow={'hidden'}
                zIndex={2}
            >
                <Box
                    position={'absolute'}
                    bgGradient="linear(to-t, transparent, bgGreen.700)"
                    height={`15%`}
                    width={`100%`}
                    top={0}
                    right={0}
                    zIndex={10}
                />
                <Video />
            </Box>
            <Container maxW={"7xl"} height={"100%"} position={"relative"} zIndex={10}>
                <Flex
                    height={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    gap={"50px"}
                >
                    <motion.div
                        variants={fadeVariant({yBot: 0, yTop: 0, duration: 1.1})}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true}}
                    >
                        <Title/>
                    </motion.div>
                    <motion.div
                        variants={fadeVariant({yBot: 0, yTop: 0, duration: 2, delay: 0.5})}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true}}
                        style={{width: "80%"}}
                    >
                        <Text
                            color={"bgWhite.50"}
                            fontSize={{ base: "md", sm: "lg", lg: "xl" }}
                            textAlign={"center"}
                        >
                            To truly create an impactful solution we need to hear everyone’s 
                            perspective. If you or someone you know has helped orchestrate 
                            Food Banks or Pantries - or if you just want to talk to us! 
                            Then we would love to...
                        </Text>
                    </motion.div>
                    <motion.div
                        variants={fadeVariant({yBot: 0, yTop: 0, duration: 2.1, delay: 1.5})}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true}}
                    >
                        <EmailModal ctaPhrase="chat today!"/>
                    </motion.div>
                </Flex>
            </Container>  
            <Box
                position={'absolute'}
                bgGradient="linear(to-b, transparent, bgGreen.900)"
                height={`5%`}
                width={`100%`}
                bottom={0}
                right={0}
                zIndex={10}
            />
        </Container>
    );
}

function Title() {
    return(
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
            <Text as={"span"} color={"bgWhite.50"}>
                We need{" "}
            </Text>
            <Text
                as={"span"}
                fontStyle={'italic'}
                bgGradient={"linear(to-l, green.300 1%, green.100)"}
                bgClip='text'
            >
                your
            </Text>
            <Text as={"span"} color={"bgWhite.50"}>
                {" "}help.
            </Text>
        </Heading>
    )
}
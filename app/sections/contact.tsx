'use client'

import { Text, Box, Container, Heading, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RedirectLink } from "../components/link";
import Video from "../components/video";
import EmailModal from "../components/modal";
import { motion } from "framer-motion"
import { fadeVariant } from '../styles/scrollAnimations'


export default function Contact() {
    const [windowWidth, setWindowWidth] = useState<number>(-1);
    const [heightWidth, setHeightWidth] = useState<number>(-1);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setHeightWidth(window.innerHeight);
          };
      
          window.addEventListener('resize', handleResize);

          return () => {
            window.removeEventListener('resize', handleResize);
          }
    }, []);

    let videoSize = windowWidth < heightWidth ? { maxWidth: 'unset', height: '100%'} : { maxWidth: '100%', height: 'unset'}

    return(
        <Container 
            maxW={'full'} 
            height={["90vh","90vh","60vh","90vh"]}
            bg={'green.800'}
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
                    bgGradient="linear(to-t, transparent, green.50)"
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
                        variants={fadeVariant({yBot: 0, yTop: 0, duration: 2, delay: 1})}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true}}
                        style={{width: "80%"}}
                    >
                        <Text
                            color={"green.100"}
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
                        variants={fadeVariant({yBot: 0, yTop: 0, duration: 2.1, delay: 2.5})}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true}}
                    >
                        <EmailModal />
                    </motion.div>
                </Flex>
            </Container>  
            <Box
                position={'absolute'}
                bgGradient="linear(to-b, transparent, green.800)"
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
            <Text as={"span"} color={"green.100"}>
                We need{" "}
            </Text>
            <Text
                as={"span"}
                fontStyle={'italic'}
                color={'yellow.100'}
            >
                your
            </Text>
            <Text as={"span"} color={"green.100"}>
                {" "}help.
            </Text>
        </Heading>
    )
}
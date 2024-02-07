"use client"

import { Container, Flex, Text } from "@chakra-ui/react";

export default function Nav() {
    return(
        // Hydration bs check layout.tsx
        <Container 
            as={'header'}
            maxW={'full'} 
            height={"10vh"}
            position={'fixed'}
            padding={0}
            zIndex={100}
        >
            <Flex
                as={'nav'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'100%'}
                width={'60%'}
                bg={'white'}
                
            >
                <Text
                    color={"green.100"}
                    fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                >
                    © 2023 All rights reserved.
                </Text>
            </Flex>
        </Container>
    )
}
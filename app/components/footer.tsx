import { Container, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
    return(
        <Container 
            as={'footer'}
            maxW={'full'} 
            height={'5vh'}
            bg={'green.800'}
            position={'relative'}
            padding={0}
        >
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                height={'100%'}
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
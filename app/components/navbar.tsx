"use client"

import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import NiceLink from "./link";

export default function Nav() {
    return(
        // Hydration bs check layout.tsx
        <Container 
            as={'header'}
            maxW={'full'} 
            // height={"10vh"}
            position={'fixed'}
            top={'10px'}
            padding={0}
            zIndex={100}
        >
            <Flex
                as={'nav'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                height={'100%'}
            >
                <Flex  
                    height={'100%'}
                    width={'60%'}
                    bg={'rgba(34, 84, 61, .95)'} 
                    borderRadius={'20px'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    padding={'15px 40px'}
                    boxShadow={'lg'}
                >
                    <Text
                        color={"green.100"}
                        fontSize={{ base: "md", sm: "lg", lg: "xl" }}
                        fontWeight={800}
                    >
                        Bag/Get
                    </Text>
                    <NavItems />
                </Flex>
            </Flex>
        </Container>
    )
}

function NavItems() {
    return(
        <HStack
            gap={'30px'}
        >
            <NiceLink path="#Stakeholders"/>
            {/* <Link as={NextLink} href='#Stakeholders'>
                
            </Link>
            <Link href='#Challenges'>
                <Text
                    color={"green.100"}
                    fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                    fontWeight={600}
                >
                    Challenges
                </Text>
            </Link>
            <Link href='#Team'>
                <Text
                    color={"green.100"}
                    fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                    fontWeight={600}
                >
                    Team
                </Text>
            </Link> */}
            <Button 
              bg={'green.100'}
              variant='solid' 
              color={'green.800'} 
              size={'md'}
              _hover={{ 
                bg: 'green.100',
                color: 'green.800',
              }}
              _active={{
                transform: 'scale(0.9)',
              }}
            >
              Contact
            </Button>
        </HStack>
    );

}
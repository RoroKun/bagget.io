import NextLink from 'next/link'
import { Box, Link, Text } from "@chakra-ui/react";


export default function NiceLink({path} : {path: string}) {
    return(
        <Link as={NextLink} href={path} textDecoration="none">
            <Box
                 as="span"
                 transition="all 0.3s ease"
                 textDecoration="none"
                 _hover={{ transform: "scale(1.1)" }}
            >
                <Text
                    color={"green.100"}
                    fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                    fontWeight={600}
                >
                    The People
                </Text>
            </Box>
        </Link>
    );
}
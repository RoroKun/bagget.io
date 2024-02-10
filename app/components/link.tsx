import NextLink from 'next/link'
import { Box, Link, Text } from "@chakra-ui/react";


export function JumpLink({path} : {path: string}) {
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

export function RedirectLink({link, title, children}: {link: string; title: string; children: React.ReactNode}) {
    return(
        <Link 
            as={NextLink} 
            href={link} 
            rel="noopener noreferrer"
            title={title}
            textDecoration="none"
            target="_blank"
        >
            {children}
        </Link>
    );
}
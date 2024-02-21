import { 
    Modal, 
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input, 
} from "@chakra-ui/react"

import { useRef } from "react"

export default function EmailModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const APITESTCALL = async () => {
    await fetch('/api/email', {
      method: 'POST'
      // body
    })
  }

  return (
    <>
      <Button 
        onClick={APITESTCALL}
        bg={'green.100'}
        variant='solid' 
        color={'green.800'} 
        size={'lg'}
        _hover={{ 
            bg: 'green.800',
            color: 'green.100',
        }}
        _active={{
            bg: 'green.800',
            color: 'green.100',
            transform: 'scale(0.9)',
        }}
    >
        Become part of the solution
    </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
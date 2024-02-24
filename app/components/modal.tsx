import { infoData } from "@/data/email-data"
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
    FormErrorMessage,
    HStack,
    VStack,
    Container,
    Textarea,
    Stack,
    Select, 
} from "@chakra-ui/react"
import { Field, Form, Formik } from 'formik'

import { useRef } from "react"

export default function EmailModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const APITESTCALL = async (info: infoData) => {
    await fetch('/api/email', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info, null, 2)
    }).then((res)=>{
      if(res.status === 200) {
        // TODO: add toast here to tell person their email was sent
        onClose();
      }
    })
  }

  return (
    <>
      <Button 
        onClick={onOpen}
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
            <EmailForm submit={(info)=> APITESTCALL(info)}/>
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

function EmailForm({submit}: {submit: (info: infoData) => void}) {
  function sanitizeInput(value: any) {
    let error
    const regexPattern = /[<>"'&]/
    if (!value) {
      error = 'Name is required'
    } else if (regexPattern.test(value)) {
      error = "Input contains unacceptable characters"
    }
    return error
  }
  // TODO: sanitize email


  return(
    <Formik
      initialValues={{ subject: '', name: '', email: '', message: '' }}
      onSubmit={(values, actions) => {

        let emailInfo = {
          name: values.name,
          from: values.email,
          subject: values.subject,
          message: values.message
        }

        submit(emailInfo)
      }}
    >
      {(props) => (
        <Form>
          <VStack>
            <Container height={'100px'} padding={'unset'}>
              <Field name='subject'>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.subject && form.touched.subject}>
                    <FormLabel>Subject</FormLabel>
                    <Stack spacing={3}>
                    <Select {...field} placeholder='Select option'>
                      <option value='subject1'>Request in Interview</option>
                      <option value='subject2'>Question Regarding team</option>
                      <option value='subject3'>Other</option>
                    </Select>
                    </Stack>
                    <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
            <HStack width={'full'}>
              <Container height={'125px'} padding={'unset'}>
                <Field name='name' validate={sanitizeInput}>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel>Name</FormLabel>
                      <Input {...field} placeholder='name' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Container>
              <Container height={'125px'} padding={'unset'}>
                <Field name='email' validate={sanitizeInput}>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel>Email</FormLabel>
                      <Input {...field} placeholder='email' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Container>
            </HStack>
            <Container height={'140px'} padding={'unset'}>
              <Field name='message' validate={sanitizeInput}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.message && form.touched.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea {...field} placeholder='message' draggable='false' resize='none'/>
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
          </VStack>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
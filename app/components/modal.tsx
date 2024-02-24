import { emailRegex, infoData, xssRegex } from "@/data/email-data"
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
          <ModalHeader>Send Email</ModalHeader>
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
    let sanitizeError: string | undefined
    if (!value) {
      sanitizeError = 'Field is required'
    } else if (xssRegex.test(value)) {
      sanitizeError = "Input contains unacceptable characters"
    }
    return sanitizeError
  }

  function sanitizeEmail(value: any) {
    let emailError: string | undefined
    emailError = sanitizeInput(value)
    if(emailError) {
      return emailError
    } else if (!emailRegex.test(value)) {
      emailError = "Invalid email"
    }

    return emailError
  }


  return(
    <Formik
      initialValues={{ subject: '', fname: '', lname: '', email: '', message: '' }}
      onSubmit={(values, actions) => {

        const fullname = values.fname + " " + values.lname

        const emailInfo = {
          name: fullname,
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
              <Field name='subject' validate={sanitizeInput}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.subject && form.touched.subject}>
                    <FormLabel>Email Subject</FormLabel>
                    <Input {...field} placeholder='Enter email subject' />
                    <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
            <HStack width={'full'}>
              <Container height={'125px'} padding={'unset'}>
                <Field name='fname' validate={sanitizeInput}>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isInvalid={form.errors.fname && form.touched.fname}>
                      <FormLabel>First Name</FormLabel>
                      <Input {...field} id="fname" placeholder='Enter first name' />
                      <FormErrorMessage>{form.errors.fname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Container>
              <Container height={'125px'} padding={'unset'}>
                <Field name='lname' validate={sanitizeInput}>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isInvalid={form.errors.lname && form.touched.lname}>
                      <FormLabel>Last Name</FormLabel>
                      <Input {...field} placeholder='Enter last name' />
                      <FormErrorMessage>{form.errors.lname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Container>
            </HStack>
            <Container height={'125px'} padding={'unset'}>
              <Field name='email' validate={sanitizeEmail}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder='Enter email' />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
            <Container height={'140px'} padding={'unset'}>
              <Field name='message' validate={sanitizeInput}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.message && form.touched.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea {...field} placeholder='What would you like to talk about?' draggable='false' resize='none'/>
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
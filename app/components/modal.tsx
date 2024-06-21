import { emailRegex, infoData, phoneRegex, xssRegex, numbersRegex } from "@/data/email-data"
import { 
    Modal, 
    ModalOverlay,
    ModalContent,
    ModalHeader,
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
} from "@chakra-ui/react"
import toast, { Toaster } from 'react-hot-toast';
import { Field, Form, Formik } from 'formik'
import { useRef, useState } from "react"
import ReCAPTCHA from 'react-google-recaptcha'

export default function EmailModal({ctaPhrase}: {ctaPhrase: string}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const sendEmail = async (info: infoData) => {
    
    await fetch('/api/email', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info, null, 2)
    }).then( async (res)=> {
      if(!res.ok) {
        const errMessage = await res.text();

        throw new Error(errMessage)
      }

      return res.text();
    })
    .then((message)=>{
      toast.success('Successfully sent email!')
      onClose();
    }).catch((err) => {
      toast.error(`Failed Sending: Invalid Email 🫠`)
      onClose();
    })
  }

  return (
    <>
      <Toaster />
      <Button 
          onClick={onOpen}
          bg={'green.100'}
          variant='solid' 
          color={'bgBlack.50'} 
          size={'lg'}
          transition={'all 0.2s ease-in-out'}
          _hover={{ 
              bg: 'green.200',
              transform: 'scale(1.1)',
          }}
          _active={{
            bg: 'green.100',
              transform: 'scale(0.9)',
          }}
          position={'relative'}
          zIndex={6}
      >
          {ctaPhrase}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={['sm','lg','xl']}
      >
        <ModalOverlay />
        <ModalContent 
          bg={'green.50'}
          color={'green.800'}
        >
          <ModalHeader>Email Bag/Get</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <EmailForm submit={(info)=> sendEmail(info)}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

function EmailForm({submit}: {submit: (info: infoData) => void}) {
  const [capValid, setCapValid] = useState<boolean>(false);

  const [phone, setPhone] = useState<string>('');

  async function verifyCaptcha(token: string | null) {
    await fetch('/api/captcha', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token
      }, null, 2)
    })
    .then( async (res)=> {
      if(!res.ok) {
        const errMessage = await res.text();
        throw new Error(errMessage)
      }
      setCapValid(true);
    })
    .catch((err) => {
      console.error(err)
      setCapValid(false);
    })
  }



  function handlePhoneSyntax (e: React.ChangeEvent<HTMLInputElement>) {

    const phoneNumber = e.target.value;
    
    if(phone[phone.length-1] === '-' && phoneNumber.length !== 5 && phoneNumber.length !== 9) {
      setPhone(phoneNumber.slice(0, -1))
    } else if(!numbersRegex.test(phoneNumber) && !(phoneNumber.length !== 1) ) {
      console.log(":hit")
      return
    } else if(phoneNumber.length === 3 || phoneNumber.length === 7) {
      const hyphenatedPhone = phoneNumber + '-';
      setPhone(hyphenatedPhone)
    } else {
      setPhone(phoneNumber)
    }
  }

  function sanitizeInput(value: any) {
    let sanitizeError: string | undefined
    if (!value) {
      sanitizeError = 'Field is required'
    } else if (xssRegex.test(value)) {
      sanitizeError = "Input contains unacceptable characters"
    }
    return sanitizeError
  }
  
  function sanitizePhone(value: any) {
    let sanitizeError: string | undefined

    if(phone.length === 0) {
      return sanitizeError
    } else if (xssRegex.test(phone)) {
      sanitizeError = "Input contains unacceptable characters"
    } else if (phone.includes(" ")) {
      return "Remove any spaces."
    } else if(!phoneRegex.test(phone)) {
      sanitizeError = "Please follow this format XXX-XXX-XXXX"
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
      initialValues={{ subject: '', fname: '', lname: '', email: '', message: '', phone: '' }}
      onSubmit={(values, actions) => {

        const fullname = values.fname + " " + values.lname

        const emailInfo = {
          name: fullname,
          from: values.email,
          subject: values.subject,
          message: values.message,
          phone
        }

        submit(emailInfo)
      }}
    >
      {(props: any) => (
        <Form>
          <VStack>
          <HStack width={'full'}>
            <Container height={'100px'} padding={'unset'}>
              <Field name='fname' validate={sanitizeInput}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.fname && form.touched.fname}>
                    <FormLabel>First Name<b>*</b></FormLabel>
                    <Input {...field} id="fname" placeholder='Enter first name' borderColor="green.800" _placeholder={{ color: "green.800" }} />
                    <FormErrorMessage>{form.errors.fname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
            <Container height={'100px'} padding={'unset'}>
              <Field name='lname' validate={sanitizeInput}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.lname && form.touched.lname}>
                    <FormLabel>Last Name<b>*</b></FormLabel>
                    <Input {...field} placeholder='Enter last name' borderColor="green.800" _placeholder={{ color: "green.800" }}/>
                    <FormErrorMessage>{form.errors.lname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
          </HStack>
          <Container height={'100px'} padding={'unset'}>
              <Field name='email' validate={sanitizeEmail}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel>Email<b>*</b></FormLabel>
                    <Input {...field} placeholder='Your email address' borderColor="green.800" _placeholder={{ color: "green.800" }}/>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
            <Container height={'100px'} padding={'unset'}>
              <Field name='phone' validate={sanitizePhone}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <Input {...field} maxLength={12} placeholder='Your phone number' borderColor="green.800" _placeholder={{ color: "green.800" }} onChange={(e) => handlePhoneSyntax(e)} value={phone}/>
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
            <Container height={'100px'} padding={'unset'}>
              <Field name='subject' validate={sanitizeInput}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.subject && form.touched.subject}>
                    <FormLabel>Subject<b>*</b></FormLabel>
                    <Input {...field} placeholder='Enter email subject' borderColor="green.800" _placeholder={{ color: "green.800" }}/>
                    <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
            <Container height={'140px'} padding={'unset'}>
              <Field name='message' validate={sanitizeInput}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl isInvalid={form.errors.message && form.touched.message}>
                    <FormLabel>Message<b>*</b></FormLabel>
                    <Textarea {...field} placeholder='What would you like to talk about?' draggable='false' resize='none' borderColor="green.800" _placeholder={{ color: "green.800" }}/>
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Container>
          </VStack>
          <VStack justifyContent='center'>
            <ReCAPTCHA
              onChange={(token: string | null) => verifyCaptcha(token)}
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
            />
          </VStack>
          <Button 
              type='submit'
              width={'full'}
              isDisabled={!props.isValid || !capValid || props.isSubmitting}
              isLoading={props.isSubmitting}
              mt={4}
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
              Send Email
          </Button>
        </Form>
      )}
    </Formik>
  )
}
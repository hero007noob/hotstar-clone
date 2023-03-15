import React from 'react'
import {Box,Button,ButtonGroup,Heading,Flex,Select,Modal,ModalBody,ModalContent,ModalHeader,ModalFooter
,Grid,GridItem} from "@chakra-ui/react"



// const style={
//     // backgroundImage:("../Images/login-background.jpg")
// }

function Login() {
  return (<Box className='login-page' >
    <Box className="dummy-header">
       <Flex minWidth='max-content' justify="space-between" alignItems='center' gap='2'>
        <Box p='2' mx="20px" >
         <img width="120px" height="25px" src="https://repository-images.githubusercontent.com/570267040/33dadd63-762d-47d7-a0da-812bd20a8d60" alt="" />
        </Box>
       
        <ButtonGroup mx="20px" gap='2'>
                <Select placeholder='View in English' width="150px" height="30px" fontSize="12px" color="white" >
                
                  <option  value='option2'>हिंदी</option>
                  <option value='option3'>తెలుగు</option>
                </Select>
          
          <Button colorScheme='blue' borderRadius="2px"  width="82px" height="30px" fontSize="12px">Log in</Button>
        </ButtonGroup>
      </Flex>
    </Box>
    {/* --------------------------------------------dummy header-------------------------- */}
    {/* --------------------------------------------subscription body starts--------------- */}
  
    <Box className="login-body">

    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100px' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid>
     
       
  
  
      
   </Box>






    </Box>
    
  )
}

export default Login

{/* <ChakraProvider>
        
      <Login/>
      </ChakraProvider> */}

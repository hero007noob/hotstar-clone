import React, { useEffect, useState } from 'react'
import {Box,Button,ButtonGroup,Heading,Flex,Select, useDisclosure} from "@chakra-ui/react"
import {  Grid,GridItem} from '@chakra-ui/react'
import {CheckIcon,CloseIcon} from '@chakra-ui/icons'


import {
  Modal,
  FormLabel,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react' 


// const style={
//     // backgroundImage:("../Images/login-background.jpg")
// }

function Login() {

const [selectedplan,setSelectedPlan]=useState("SUPER")
const { isOpen, onOpen, onClose } = useDisclosure()
const [isAuth,setAuth]=useState(false)
const [phone,setPhone]=useState("+91 8617261519")



useEffect(()=>{

},[isAuth])
console.log(isAuth)


  return (<Box className='login-page' >
               <Box className="dummy-header">
                      <Flex minWidth='max-content' justify="space-between" alignItems='center' gap='2'>
                           <Box p='2' mx="20px" >
                           <img width="120px" height="25px" src="https://repository-images.githubusercontent.com/570267040/33dadd63-762d-47d7-a0da-812bd20a8d60" alt="" />
                          </Box>
       
                          <ButtonGroup mx="20px" gap='2'>
                             <Select placeholder='View in English' width={["80px","150px"]} height="30px" fontSize="12px" color="white" >
                
                                <option  value='option2'>हिंदी</option>
                                <option value='option3'>తెలుగు</option>
                             </Select>

                             {
                              isAuth===true?<Select placeholder={phone} width={["80px","150px"]} height="30px" fontSize="12px" color="white" >
                
                              <option  value='option2'>Watchlist</option>
                              <option value='option3'>My Account</option>
                              <option  value='option3'> <Button onClick={()=>setAuth(false)}> Log Out</Button></option>
                           </Select>
                           :
                           <Button onClick={onOpen} colorScheme='blue' borderRadius="2px"  width="82px" height="30px" fontSize="12px">Log in</Button>
                             }
          
                             {/* <Button onClick={onOpen} colorScheme='blue' borderRadius="2px"  width="82px" height="30px" fontSize="12px">Log in</Button> */}
                        </ButtonGroup>
                     </Flex>
               </Box>
    {/* --------------------------------------------dummy header-------------------------- */}
    {/* --------------------------------------------subscription body starts--------------- */}
  
    <Box className="login-body">
                 <Heading fontWeight={['10px','15px','20px']}  fontSize={['15px','20px','27px']}>
                                                         Subscribe to watch all content on Disney+ Hotstar
                </Heading>
{/* -------------------subscription box-------------- */}
                 <Box className='subscription-box'  height={["400px","500px"]}  w= {['90%','85%','60%']} my="20px">
                      <Grid
                      marginTop="10px"
                      h='95%'
                      templateRows='repeat(12, 1fr)'
                      templateColumns='repeat(6, 1fr)'
                      gap={4}
                      >
                              <GridItem rowSpan={8} colSpan={6}  p="8px" display="flex">
       
                                   {/* subscription top box */}
                                   <GridItem w="60%" colSpan={4}   >
                                    <Box w={"100%"} marginLeft={["",""]} marginTop={["25","35px"]} fontSize={["11px","13px","12px","15px"]} color="#E2E8F0" >
                                   <Box p={["5px"]} border="1px solid #1A365D">
                                       <Box  my={["5px","10px"]}>All content <br/></Box>
                                       <Box mt="-10px" color="#3182CE" fontSize={["7px","10px","12px"]}>Movies, live sports, TV, Specialst</Box>
                                   </Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}>Watch on TV or Laptop</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}>Ads free movies and shows (except sports)</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}>Number of devices that can be logged in</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}>Max video quality</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}>Max audio quality</Box>
                                   </Box>

              
                                    </GridItem>
                                    <GridItem w="20%" colSpan={2} bg={selectedplan==="SUPER"?"#1A365D":""}>
                                    <Box fontSize={["12px","14px","16px"]} color={selectedplan==="SUPER"?"yellow":"white"}><p>Super</p></Box>
                                    <Box w={"100%"}  marginTop={["8px","15px","12px"]} fontSize={["11px","13px","12px","15px"]} color={selectedplan==="SUPER"?"white":"#E2E8F0"} >
                                   <Box p={["5px"]} border="1px solid #1A365D">
                                       <Box  my={["5px","10px"]}><CheckIcon/> <br/></Box>
                                       <Box mt="-10px" color="#3182CE" fontSize={["7px","10px","12px"]}>&nbsp;</Box>
                                   </Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}><CheckIcon/></Box>
                                   <Box  border="1px solid #1A365D" p={["12px","5px"]}><CloseIcon/></Box>
                                   <Box  border="1px solid #1A365D" p={["12px","5px"]}>2</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}fontSize={["8px","9px","12px"]}>Full HD(1080p)</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]} fontSize={["8px","9px","12px"]}>Dolby 5.1</Box>
                                   </Box>
                                    </GridItem>




                                    <GridItem w="20%" colSpan={2}  bg={selectedplan==="PREMIUM"||selectedplan==="PREMIUM1"?"#1A365D":""}  >
                                    <Box fontSize={["12px","14px","16px"]} color={selectedplan==="PREMIUM1"||selectedplan==="PREMIUM"?"yellow":"white"}><p>Premium</p></Box>
                                    <Box w={"100%"}  marginTop={["8px","15px","12px"]} fontSize={["11px","13px","12px","15px"]} color={selectedplan==="SUPER"?"#E2E8F0":"white"} >
                                   <Box p={["5px"]} border="1px solid #1A365D">
                                       <Box  my={["5px","10px"]}><CheckIcon/> <br/></Box>
                                       <Box mt="-10px" color="#3182CE" fontSize={["7px","10px","12px"]}>&nbsp;</Box>
                                   </Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]}><CheckIcon/></Box>
                                   <Box  border="1px solid #1A365D" p={["12px","5px"]}><CheckIcon/></Box>
                                   <Box  border="1px solid #1A365D" p={["12px","5px"]}>4</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]} fontSize={["10px","9px","12px"]}>4K (2160P)</Box>
                                   <Box  border="1px solid #1A365D" p={["4px","5px"]} fontSize={["10px","9px","12px"]}>Dolby 5.1</Box>
                                   </Box>
                                    </GridItem>
       
                                   
      
                              </GridItem>

                                {/* subscription button box */}
                              <GridItem rowSpan={2} colSpan={6} color="white" >
                                
                                      <Button fontSize={["10px","12px","14px"]} onClick={()=>{setSelectedPlan("SUPER")}} className='bottom-button' mx={["5px","2px","5px"]} color="white"  h="95%"  w="30%" colorScheme='teal' variant='outline'>
                                        <Box color={"yellow"}>Super</Box><br /> <div>₹899/Year</div>  {selectedplan==="SUPER"?<Box className='checkbox-icon'><CheckIcon/></Box>:""} 
                                      </Button>
         
                                      <Button  fontSize={["8px","12px","14px"]} onClick={()=>{setSelectedPlan("PREMIUM")}} className='bottom-button' mx={["5px","2px","5px"]} color="white"  h="95%"  w="30%" colorScheme='teal' variant='outline'>
                                        <Box color={"yellow"}>Premium</Box> &nbsp; <Box>₹1499/Year</Box> {selectedplan==="PREMIUM"?<Box className='checkbox-icon'><CheckIcon/></Box>:""}
                                      </Button>
                                      <Button fontSize={["8px","12px","14px"]} onClick={()=>{setSelectedPlan("PREMIUM1")}} className='bottom-button' mx={["5px","2px","5px"]} color="white"  h="95%"  w="30%" colorScheme='teal' variant='outline'>
                                        <Box color={"yellow"}>Premium</Box> &nbsp; <Box>₹299/Month</Box> {selectedplan==="PREMIUM1"?<Box className='checkbox-icon'><CheckIcon/></Box>:""}
                                      </Button>

                              </GridItem>

                               {/* subscription proceed to pay box */}
                              <GridItem rowSpan={2} colSpan={6}  >
                                {
                                  isAuth===false?<Button onClick={onOpen} my="8px"h="95%" w="95%" colorScheme='blue'>CONTINUE WITH  {selectedplan==="SUPER"?"SUPER":"PREMIUM"}  </Button>
                                  : <Button  my="8px"h="95%" w="95%" colorScheme='blue'>CONTINUE WITH  {selectedplan==="SUPER"?"SUPER":"PREMIUM"}  </Button>
                                }
                                   

                              </GridItem>
  
  
                      </Grid>

                   </Box>


                   {/* ===================login with phone model==================== */}
                                     <Modal
                                       isOpen={isOpen}
                                        onClose={onClose}
                                        
                                      >
                                        <ModalOverlay />
                                        <ModalContent>
                                          <ModalHeader>Create your account</ModalHeader>
                                          <ModalCloseButton />
                                          <ModalBody pb={6}>
                                           
                                              <FormLabel>Enter Phone</FormLabel>
                                              <Input  placeholder='Phone' />
                                           

                                            
                                              <FormLabel>Enter Password</FormLabel>
                                              <Input placeholder='Password' />
                                           
                                          </ModalBody>

                                          <ModalFooter>
                                            <Button onClick={()=>setAuth(true)} colorScheme='blue' mr={3}>
                                              Save
                                            </Button>
                                            <Button onClick={onClose}>Cancel</Button>
                                          </ModalFooter>
                                        </ModalContent>
                                      </Modal>


                                     

                   {/* <Box color={"white"}>
                    helow
                    <img src="D:\git-hub\hotstar-clone\src\images\footer-hotstar.jpg" alt="no data" />
                   </Box> */}

  

       
  
  
      
      </Box>






    </Box>
    
  )
}

export default Login


 {/* <ChakraProvider>
        <Paymentpage/>
      
      </ChakraProvider> */}

//       import { ChakraProvider } from '@chakra-ui/react'
// import Login from './Component/Login';
// import Paymentpage from './Component/Paymentpage';


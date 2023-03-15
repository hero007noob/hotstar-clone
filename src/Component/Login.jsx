import React from 'react'
import {Box,Button,ButtonGroup,Heading,Flex,Select} from "@chakra-ui/react"
import { Stack, HStack, VStack ,Grid,GridItem,Text} from '@chakra-ui/react'



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
                             <Select placeholder='View in English' width={["80px","150px"]} height="30px" fontSize="12px" color="white" >
                
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
                 <Heading fontWeight={['10px','15px','20px']}  fontSize={['15px','20px','27px']}>
                                                         Subscribe to watch all content on Disney+ Hotstar
                </Heading>
{/* -------------------subscription box-------------- */}
                 <Box className='subscription-box'  w= {['90%','85%','60%']} my="20px">
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
                                    <Box marginLeft={["-50px",""]} marginTop={["25","35px"]} fontSize={["11px","17px"]} >
                                   <Box my={["5px","10px"]}>All content <br/></Box>
                                   <Box mt="-10px" color="#3182CE" fontSize={["7px","10px","12px"]}>Movies, live sports, TV, Specialst</Box>
                                   
                                   <Box  my="10px">Watch on TV or Laptop</Box>
                                   <Box  my="10px">Ads free movies and shows (except sports)</Box>
                                   <Box  my="10px">Number of devices that can be logged in</Box>
                                   <Box  my="10px">Max video quality</Box>
                                   <Box  my="10px">Max audio quality</Box>
                                   </Box>

              
                                    </GridItem>
                                    <GridItem w="20%"  colSpan={2}  >
                                   middle
                                    </GridItem>
                                    <GridItem w="20%" colSpan={2}  >
                                   right
                                    </GridItem>
       
                                   
      
                              </GridItem>

                                {/* subscription button box */}
                              <GridItem rowSpan={2} colSpan={6} color="white">
                                      <Button  mx={["5px","2px","5px"]} color="white" h="95%" w="30%" colorScheme='teal' variant='outline'>
                                        Button
                                      </Button>
         
                                      <Button mx={["5px","2px","5px"]} color="white"  h="95%"  w="30%" colorScheme='teal' variant='outline'>
                                        Button
                                      </Button>
                                      <Button mx={["5px","2px","5px"]}  color="white"  h="95%"  w="30%" colorScheme='teal' variant='outline'>
                                        Button
                                      </Button>

                              </GridItem>

                               {/* subscription proceed to pay box */}
                              <GridItem rowSpan={2} colSpan={6}  >
                                      <Button my="8px"h="95%" w="95%" colorScheme='blue'>Button</Button>

                              </GridItem>
  
  
                      </Grid>

                   </Box>

  

       
  
  
      
      </Box>






    </Box>
    
  )
}

export default Login

{/* <ChakraProvider>
        
      <Login/>
      </ChakraProvider> */}



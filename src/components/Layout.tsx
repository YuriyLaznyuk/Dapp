import React, { FC, ReactElement, ReactNode } from "react";
import {Flex} from "@chakra-ui/react"


interface LayoutProps{
  children?:ReactNode
}


const Layout:FC<LayoutProps> =
  ({children})
    :ReactElement=> {
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      h="100vh"
      bg='gray.800'
    >
      {children}
    </Flex>
  );
};

export default Layout;
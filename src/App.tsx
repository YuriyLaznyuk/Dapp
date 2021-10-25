import React, { FC, ReactElement } from "react";
import './public/styles/app.scss'
import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Count from "./components/Count";
import Logo from "./public/svg/react.svg";

const App:FC = ():ReactElement => {
  const {isOpen,onOpen,onClose}=useDisclosure()
  return (
    <ChakraProvider>
<Layout>
  <h1 style={{fontWeight:700, fontSize:32, paddingBottom:15}}>My Dapp contract</h1>
  <div className="logo">
  <Logo/>
  </div>
  <ConnectButton handleOpenModal={onOpen}/>
  <Count/>


  <AccountModal isOpen={isOpen} onClose={onClose}/>
</Layout>
    </ChakraProvider>
  );
};

export default App;
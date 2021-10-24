import React, { FC, ReactElement } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import IdentIcon from "./IdentIcon";

interface PropsConnectButton{
  handleOpenModal:any
}

const ConnectButton:FC<PropsConnectButton> = ({handleOpenModal}):ReactElement => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  return account ? (
    <Box
      display="flex"
      alignItems="center"
      bg="gray.700"
      p="1"
      borderRadius="xl"
    >


      <Box px="1">
        <Text color="white" fontSize="lg">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>

      <Button onClick={handleOpenModal}
      bg="gray.800"
      border="1px solid transparent"
      borderRadius="xl"
      // m={1}
      px={3}
      height={38}
      _hover={{
        bg:"gray.700",
        border:"1px solid blue",
        transition:'all 0.8s'
      }}
      >

        <Text color="white" fontSize="18px">
          {account && account.slice(0, 6) + "..." +
          account.slice(account.length - 4, account.length)}
        </Text>
<IdentIcon account={account}/>
      </Button>

    </Box>
  ) : (
    <Button onClick={() => activateBrowserWallet()}
    >Connect to a wallet</Button>
  );
};

export default ConnectButton;
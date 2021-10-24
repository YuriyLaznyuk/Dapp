import React, { FC, ReactElement } from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text, ModalProps
} from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import IdentIcon from "./IdentIcon";
import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  isOpen: any,
  onClose: any
}
const AccountModal: FC<Props> = ({ isOpen, onClose }: Props) => {

  const { account, deactivate } = useEthers();

  const handleDeactivateAccount = () => {
    deactivate();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="md"
    >
      <ModalOverlay />
      <ModalContent
        bg="gray.900"
        border="1px solid gray.700"
        borderRadius="30px"
      >
        <ModalHeader
          color="white" px={4} fontSize="lg" fontWeight="medium">
          Account
        </ModalHeader>
        <ModalCloseButton
          color="white"
          fontSize="lg"
          _hover={{
            color: "whiteAlpha.700"
          }}
        />
        <ModalBody
          pt={0} px={4}>
          <Box
            borderRadius="20px"
            border="1px solid gray"
            px={5} pt={4} pb={2}
            mb={3}
          >
            <Flex justifyContent="space-between"
                  alignItems="center" mb={3}
            >
              <Text color="gray.400" fontSize="sm">
                Connected with MetaMask
              </Text>
              <Button variant="outline" size="sm"
                      borderColor="blue.800"
                      borderRadiue="3x1"
                      color="blue.500"
                      fontSize="13px"
                      fontWeight="normal"
                      px={2} height="26px"

                      _hover={{
                        background: "none",
                        borderColor: "blue.300",
                        textDecoration: "underline"
                      }}
                      onClick={ handleDeactivateAccount  }
              >
                Change
              </Button>
            </Flex>
            <Flex
              alignItems="center"
              mt={2} mb={4} lineHeight={1}
            >
              <IdentIcon account={account}/>
              <Text
                color="white"
                fontSize="xl"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
              >
                {account && account.slice(0, 6) + "..." +
                account.slice(account.length - 4, account.length)}

              </Text>
            </Flex>

            <Flex alignItems="center" m={3}>
              <Button
              variant="link"
              color="gray.400"
              fontSize="sm"
              fontWeight="normal"
              _hover={{
                textDecoration:"none",
                color:"whiteAlpha.700"
              }}
               >
                <CopyIcon mr={1}/>
                Copy Address</Button>
              <Link
                fontSize="sm"
                display="flex"
                alignItems="center"
                href={`https://ropsten.etherscan.io/address/${account}`}
                isExternal
                color="gray.400"
                ml={6}
                _hover={{
                  color: "whiteAlpha.800",
                  textDecoration: "underline",
                }}
              >
                <ExternalLinkIcon mr={1}/>
                View on Explorer</Link>
            </Flex>
          </Box>

        </ModalBody>

        <ModalFooter
         borderRadius={"0 0 20px 20px"}
         justifyContent="flex-start"
        bg="gray.800">

          <Text
            textAlign="start"
            color="white"
            fontWeight="medium"
            fontSize="md"

          >
            Your transactions will appear here...
          </Text>
        </ModalFooter>
      </ModalContent>

    </Modal>
  );
};

export default AccountModal;
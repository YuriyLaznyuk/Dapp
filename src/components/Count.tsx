import React, { FC, ReactElement, useState } from "react";
import { Box, Button, Flex, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import { useCount } from "../hooks/useCount";
import { useContractMethod } from "../hooks/useContractMethod";

const Count: FC = (): ReactElement => {
  const count = useCount();
  const [_count, _setCount] = useState("");
  const { state, send: incrementCount } = useContractMethod("incrementCount");
  const { state: setCountState, send: setCount } = useContractMethod("setCount");
  // console.log(count);
  const handleSetCount = () => {
if (_count){
  setCount(parseInt(_count));
  _setCount("");
}
  }

  return (
    <Flex direction="column" align="center" mt={4}>
      <Text color="white" fontSize="8xl" fontWeight={700} my={3}>
        {count ? count.toNumber() : 0}
      </Text>
      <Button onClick={() => incrementCount()}
              colorScheme="teal" size="lg">Increment</Button>
      <Box mt={4}>
        <NumberInput
          mb={2}
          color="white"
          fontWeight={700}
          value={_count}
          onChange={(valueAsString) => _setCount(valueAsString)}
        >
          <NumberInputField />
        </NumberInput>
        <Button
          onClick={handleSetCount}
          width={"100%"}
          colorScheme="blue">Set Count</Button>
      </Box>

    </Flex>
  );
};

export default Count;
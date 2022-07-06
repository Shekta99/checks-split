import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <Flex as="header" p="1%" color="white" bg="blue.500" justify="center">
      <Box>Restaurant Orders APP</Box>
    </Flex>
  );
};

import React from "react";
import { Text, Button, Grid, GridItem, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Home: React.FC = () => {
  return (
    <Center>
      <Grid
        borderWidth="2px"
        borderRadius="lg"
        borderColor="gray.300"
        maxW="md"
        p={10}
        m={5}
        templateColumns="repeat(2,1fr)"
        gap={6}
        maxH="xs"
      >
        <GridItem w="100%">
          <Button
            leftIcon={<AddIcon w={6} mr={2} />}
            colorScheme="blue"
            variant="outline"
          >
            <Text>Add Order</Text>
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button
            leftIcon={<AddIcon w={6} mr={2} />}
            colorScheme="blue"
            variant="outline"
          >
            <Text>Add Order</Text>
          </Button>
        </GridItem>
      </Grid>
    </Center>
  );
};

import React from "react";
import { Grid, GridItem, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { MenuButton } from "./utils/MenuButton";

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
          <MenuButton
            Icon={<AddIcon w={6} mr={2} />}
            text="Add Order"
          ></MenuButton>
        </GridItem>
        <GridItem w="100%">
          <MenuButton
            Icon={<AddIcon w={6} mr={2} />}
            text="Add Order"
          ></MenuButton>
        </GridItem>
      </Grid>
    </Center>
  );
};

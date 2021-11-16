import { Box, Grid, Heading } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

const ViewBounties = observer(() => {
  const { bountyStore } = useStore();

  useEffect(() => {
    bountyStore.getAllBounties();
  }, []);

  console.log({ bountyStorez: bountyStore.allBounties });

  if (!bountyStore.allBounties) return null;

  return (
    <Box m="40px auto" maxW="1200px" bg="red">
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        <Box p="3" border="1px" w="100%" h="10" bg="blue.500">
          <Heading>Title</Heading>
        </Box>
        <Box border="1px" w="100%" h="10" bg="blue.500" />
        <Box border="1px" w="100%" h="10" bg="blue.500" />
        <Box border="1px" w="100%" h="10" bg="blue.500" />
        <Box border="1px" w="100%" h="10" bg="blue.500" />
        <Box border="1px" w="100%" h="10" bg="blue.500" />
      </Grid>
    </Box>
  );
});

export default ViewBounties;

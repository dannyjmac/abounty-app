import { FC } from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Bounty } from "../../model";
import { CardBalance } from "./CardBalance";

export const BountyCard: FC<Bounty> = ({ subject, balance, description }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      p="5"
      border="1px"
      borderRadius="10"
      boxShadow="0px 1px 7px 1px rgba(0, 0, 0, 0.1);"
      borderColor="rgba(0, 0, 0, 0.15)"
      h="350"
      w="300px"
    >
      <Box>
        <Heading fontSize="23px">{subject}</Heading>
        <Box my="5">{description}</Box>
      </Box>
      <CardBalance usd={1} btc={1} />
    </Flex>
  );
};

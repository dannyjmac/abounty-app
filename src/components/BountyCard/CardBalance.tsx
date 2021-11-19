import { FC } from "react";
import { Flex, Box } from "@chakra-ui/layout";

interface ICardBalanceProps {
  usd: number;
  btc: number;
}

export const CardBalance: FC<ICardBalanceProps> = ({ usd, btc }) => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      px="5"
      bg="#C4C4C4"
      borderRadius="5"
    >
      <Box textStyle="h1" fontSize="2xl">
        ${usd}
      </Box>
      <Box>{btc}</Box>
    </Flex>
  );
};

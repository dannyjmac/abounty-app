import React, { FC } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Logo } from "./components/Logo";
import ViewBounties from "./components/ViewBounties";
import { createStore } from "./store/store";
import { StoreProvider } from "./store";
import { theme } from "./theme";

const store = createStore();

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>
        <Box w="100vw" h="100vh" bg="#E5E1DB">
          <Box p="3">
            <Logo />
          </Box>

          <ViewBounties />
        </Box>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default App;

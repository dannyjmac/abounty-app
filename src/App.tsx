import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Logo } from "./components/Logo";
import ViewBounties from "./components/ViewBounties";

const App: FC = () => {
  return (
    <div className="App">
      <Box w="100vw" h="100vh" bg="#E5E1DB">
        <header>
          <Box p="3">
            <Logo />
          </Box>
        </header>

        <main>
          <ViewBounties />
        </main>
      </Box>
    </div>
  );
};

export default App;

import { Box, Grid } from "@chakra-ui/layout";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { BountyCard } from "./BountyCard";
import { Bounty } from "../model";

const ViewBounties = observer(() => {
  const { bountyStore } = useStore();

  useEffect(() => {
    bountyStore.getAllBounties();
  }, [bountyStore]);

  if (!bountyStore.allBounties) return null;

  return (
    <Box p={["0 0 0 20px", "0 0 0 20px", "0 0 0 20px", "50px"]} maxW="1200px">
      <Box m="20px 0px">
        <Box fontSize="20px">#Bitcoin</Box>
        <Box
          p="20px 0px"
          css={scrollBar}
          overflowX={["scroll", "scroll", "scroll", "visible"]}
        >
          <Grid
            templateColumns={[
              "repeat(999, 1fr)",
              "repeat(999, 1fr)",
              "repeat(999, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={5}
          >
            {bountyStore.allBounties.map((bounty: Bounty) => (
              <BountyCard {...bounty} />
            ))}
          </Grid>
        </Box>
      </Box>
      <Box fontSize="20px">#Climate</Box>
      <Box
        css={scrollBar}
        p="20px 0px"
        overflowX={["scroll", "scroll", "scroll", "visible"]}
      >
        <Box m="20px 0px">
          <Grid
            templateColumns={[
              "repeat(999, 1fr)",
              "repeat(999, 1fr)",
              "repeat(999, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={5}
          >
            {bountyStore.allBounties.map((bounty: Bounty) => (
              <BountyCard {...bounty} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
});

const scrollBar = {
  scrollbarColor: "white black",
  borderRadius: 0,
  "&::-webkit-scrollbar": {
    height: "14px",
    backgroundColor: "white",
    borderRadius: "20px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "black",
  },
  "&::-webkit-scrollbar-track-piece": {
    backgroundColor: "c2d2e4",
  },
  "&::-webkit-scrollbar-thumb:horizontal": {
    borderRadius: "30px",
    margin: "3px",
    background: "white",
  },
};

export default ViewBounties;

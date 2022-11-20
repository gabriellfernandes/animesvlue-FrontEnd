import { Box, Fade, Typography } from "@mui/material";
import { StyledPlayerOverlay } from "../styled";

interface PlayerOverlayInterface {
  state: any;
  episodeTitle: string;
}

const PlayerOverlay = ({
  state,
  episodeTitle
}: PlayerOverlayInterface) => {
  return (
    <StyledPlayerOverlay state={state}>
      <Box className={"video-player__overlay-inner"}>
        <Fade in>
          <Typography variant="overline" color={"white"}>
            <h4>{`Episode - ${episodeTitle}`}</h4>
          </Typography>
        </Fade>
      </Box>
    </StyledPlayerOverlay>
  );
};

export default PlayerOverlay;

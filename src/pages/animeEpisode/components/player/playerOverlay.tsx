import { Box, Fade, Typography } from "@mui/material";
import { StyledPlayerOverlay } from "../styled";

interface PlayerOverlayInterface {
  state: any;
  animeTitle: string;
  episodeTitle: string;
}

const PlayerOverlay = ({
  state,
  episodeTitle,
  animeTitle,
}: PlayerOverlayInterface) => {
  return (
    <StyledPlayerOverlay state={state}>
      <Box className={"video-player__overlay-inner"}>
        <Fade in>
          <Typography variant="overline" color={"white"}>
            <h2>{episodeTitle}</h2>
          </Typography>
        </Fade>
        <Fade in>
          <Typography variant="overline" color={"white"}>
            <h4>{animeTitle}</h4>
          </Typography>
        </Fade>
      </Box>
    </StyledPlayerOverlay>
  );
};

export default PlayerOverlay;

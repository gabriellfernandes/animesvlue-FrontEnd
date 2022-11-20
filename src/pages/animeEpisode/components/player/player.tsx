import * as React from "react";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import ReactPlayer from "react-player";
import PlayerControls from "./playerControls";
import PlayerOverlay from "./playerOverlay";
import { INITIAL_STATE, reducer } from "./playerReducer";
import { StyledPlayer } from "../styled";
import { EpisodeNumber } from "../../../../config/episodesFunctions";

interface PlayerInterface {
  url: string;
  light: string;
  episodeTitle: string;
  animeTitle: string;
}

const Player = ({ url, light, episodeTitle, animeTitle }: PlayerInterface) => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const playerRef = React.useRef<ReactPlayer>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const epNumber = EpisodeNumber(episodeTitle)

  const handlePreview = () => {
    dispatch({ type: "PLAY" });
    dispatch({ type: "LIGHT", payload: false });
  };

  const handlePause = () => {
    dispatch({ type: "PAUSE" });
  };

  const handlePlay = () => {
    dispatch({ type: "PLAY" });
  };

  const handleEnded = () => {
    dispatch({ type: "LIGHT", payload: true });
    playerRef.current?.showPreview();
  };

  const handleProgress = (progress: { playedSeconds: number }) => {
    dispatch({ type: "SEEK", payload: progress.playedSeconds });
  };

  const handleDuration = (duration: number) => {
    dispatch({ type: "DURATION", payload: duration });
  };

  return (
    <StyledPlayer state={state} ref={wrapperRef}>
      <ReactPlayer
        ref={playerRef}
        url={url}
        width="100%"
        height="100%"
        light={light}
        playIcon={
          <PlayArrowRounded
            sx={{
              color: "white",
              fontSize: "6rem",
            }}
          />
        }
        controls={state.controls}
        loop={state.loop}
        muted={state.muted}
        playing={state.playing}
        playbackRate={state.playbackRate}
        volume={state.volume}
        onPlay={handlePlay}
        onEnded={handleEnded}
        onPause={handlePause}
        onDuration={handleDuration}
        onProgress={handleProgress}
        onClickPreview={handlePreview}
      />
      <PlayerOverlay state={state} episodeTitle={epNumber} />
      {!state.controls && !state.light && (
        <PlayerControls
          state={state}
          dispatch={dispatch}
          playerRef={playerRef}
          wrapperRef={wrapperRef}
        />
      )}
    </StyledPlayer>
  );
};

export default Player;

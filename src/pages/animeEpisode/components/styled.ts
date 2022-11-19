import { ReactPlayerProps } from "react-player";
import styled from "styled-components";

export const StyledPlayerOverlay = styled("div")<ReactPlayerProps>`
  position: absolute;
  width: 100.2%;
  box-sizing: border-box;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;

  left: 0;
  top: 0;
  bottom: ${({ state }) => (state.light ? "0" : "94px")};
  background-color: ${({ state }) =>
    state.light || state.playing ? "transparent" : "rgba(0, 0, 0, 0.4)"};
  opacity: ${({ state }) => (state.playing ? "0" : "1")};
  transition: opacity 0.2s ease-in-out;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .video-player__overlay-inner {
    padding-left: ${({ state }) => (state.light ? "50px" : "25px")};
    padding-bottom: ${({ state }) => (state.light ? "50px" : "38px")};
    width: ${({ state }) => (state.light ? "auto" : "100%")};
  }
`;

export const StyledPlayerControls = styled("div")`
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100.2%;
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  .video-player__slider {
    width: 100%;
    color: #fff;
    box-sizing: border-box;

    &--seek {
      margin-left: 12px;
      margin-right: 12px;
    }

    &--sound {
      width: 100px;
    }

    .MuiSlider-track {
      border: none;
    }

    .MuiSlider-thumb {
      background-color: #fff;

      &:before {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      }

      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`;

export const StyledPlayer = styled("div")<ReactPlayerProps>`
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 8px;
  video,
  .react-player__preview {
    border-radius: 8px;
  }
  .react-player__preview:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1), transparent);
  }
  
  .video-player__controls {
    opacity: ${({ state }) => (state.light ? "0" : state.playing ? "0" : "1")};
  }

  .video-player__controls:hover{
    opacity: 1;
  } 
`;

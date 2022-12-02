import { ReactPlayerProps } from "react-player";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
from{
    opacity: 1;
  }

  to{
    opacity: 0;
  }
`;

export const StyledPlayerOverlay = styled.div<ReactPlayerProps>`
  position: absolute;
  width: 100.2%;
  box-sizing: border-box;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  @media (max-width: 1200px) {
    .video-player__overlay-inner_text {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 650px) {
    .video-player__overlay-inner_text {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 650px) {
    justify-content: left;
  }

  @media (max-width: 500px) {
    .video-player__overlay-inner_text {
      margin-top: 10px;
      font-size: 0.9rem;
      text-align: left;
    }
  }

  @media (max-width: 350px) {
    .video-player__overlay-inner_text {
      font-size: 0.9rem;
      text-align: left;
    }
  }
`;

export const StyledSkipIntro = styled.div<ReactPlayerProps>`
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100.2%;
  background-color: transparent;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  opacity: 1;
  height: calc(100% - 120px);

  @media (max-width: 768px) {
    height: calc(100% - 140px);
  }
  @media (max-width: 460px) {
    height: calc(100% - 160px);
  }

  .video-player__overlay-button-skip-intro {
    position: absolute;
    right: 1%;
    bottom: 0%;
    font-size: 1.4rem;
    background-color: rgb(19, 18, 25, 0.5);
    border-radius: 16px;
    padding: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    color: white;
    animation: ${(state) => (state ? fadeIn : fadeOut)} 1s linear;
    transition: visibility 1s linear;
    visibility: ${(state) => (state ? "visible" : "hidden")};
    &:hover {
      background-color: var(--hoverColor);
    }
  }

  @media (max-width: 460px) {
    .video-player__overlay-button-skip-intro {
      bottom: -100%;
      font-size: 1rem;
      padding: 0.9rem;
    }
  }

  @media (max-width: 375px) {
    .video-player__overlay-button-skip-intro {
      bottom: -150%;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 350px) {
    .video-player__overlay-button-skip-intro {
      bottom: -110%;
      font-size: 0.7rem;
      padding: 0.5rem;
    }
  }
`;

export const StyledPlayerControls = styled.div`
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  bottom: 0;
  left: -1px;
  width: 100.3%;
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

  @media (max-width: 500px) {
    .video-player__slider {
      &--sound {
        width: 80px;
      }
    }
    button {
      width: 40px;
    }
    svg {
      width: 25px;
    }
  }

  @media (max-width: 420px) {
   
    .video-player__slider {
      
      &--sound {
        width: 60px;
      }
    }
    button {
      width: 35px;
    }

    svg {
      width: 20px;
    }
  }

  @media (max-width: 350px) {
    .video-player__slider {
      &--sound {
        width: 40px;
      }
    }

    .timing_video {
      font-size: 0.7rem;
    }

    button {
      width: 25px;
    }

    svg {
      width: 17px;
    }
  }
`;

export const StyledPlayer = styled.div<ReactPlayerProps>`
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

  .video-player__controls:hover,
  .video-player__controls:active {
    opacity: 1;
  }

  @media (max-width: 500px) {
    &:hover {
      .video-player__controls, .video-player__controls:active{
        opacity: 1;
      }
    }
  }
`;

import { ToastPosition, Theme } from "react-toastify";

interface ToastyStyled {
  position: ToastPosition;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined | string;
  toastId: string;
  theme: Theme;
}

export const toastStyle: ToastyStyled= {
    position: "top-right",
    autoClose: 1600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: "myToast",
    theme: "dark"
  };
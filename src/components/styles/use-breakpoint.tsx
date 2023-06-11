import { useEffect, useState, createContext } from "react";
import { DESKTOP, TABLET } from "./breakpoints";

type BreakpointType = 'mobile' | 'tablet' | 'desktop';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const useBreakpoint = () =>  {
  let breakpoint: BreakpointType = 'mobile';
  const { width } = useWindowSize();

  if (width >= TABLET ) {
    breakpoint = 'tablet';
  }

  if (width >= DESKTOP) {
    breakpoint = 'desktop';
  }

  return breakpoint
}

export const BreakpointContext = createContext<BreakpointType>('mobile');
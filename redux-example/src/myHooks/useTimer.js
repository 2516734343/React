import { useEffect } from "react";

export function useTimer(func, delay) {
  let timer = null;
  useEffect(() => {

    timer = setInterval(func, delay);
    return () => {
      clearInterval(timer);
    }
  }, [])
}
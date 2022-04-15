import { useEffect, useRef, useState } from "react";


export function useScroll() {

  const dom = useRef(null);

  const [scrollOptions, setScrollOptions] = useState({
    top: 0,
    opacity: 1,
    suctionTop: false,
  })

  useEffect(() => {
    const box = dom.current;
    // 元素可见区域的高度
    const offsetHeight = box.offsetHeight;

    const handlerScroll = () => {
      const scrollY = window.scrollY;
      const radio = box.offsetHeight / 500 * 20;
      const computedOpacity = 1 - scrollY / 160; // 计算透明度
      // 控制吸顶效果
      const offsetTop = offsetHeight - scrollY - offsetHeight / 500 * 84;
      const top = 0 - scrollY / 5;

      setScrollOptions({
        top,
        opacity: computedOpacity <= 0 ? 0 : computedOpacity,
        suctionTop: offsetTop < radio
      })
    }

    document.addEventListener('scroll', handlerScroll);

    return function () {
      document.removeEventListener('scroll', handlerScroll);
    }
  }, []);

  return [scrollOptions, dom];
}
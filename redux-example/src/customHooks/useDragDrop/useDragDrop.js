import { useMemo, useRef, useState, useLayoutEffect } from "react";



export function useDragDrop() {

  const currentDom = useRef(null);

  /* 保存上次移动位置 */
  const lastOffset = useRef({
    x: 0, /* 当前x 值 */
    y: 0, /* 当前y 值 */
    X: 0, /* 上一次保存X值 */
    Y: 0, /* 上一次保存Y值 */
  })
  /* 更新位置 */
  const [, foceUpdate] = useState({})

  const [dragStart, ondrag, ondragover] = useMemo(() => {
    const currentOffset = {}
    const dragStart = (e) => {
      currentOffset.X = e.clientX
      currentOffset.Y = e.clientY
    }
    const ondrag = (targetT) => {
      console.log(targetT);
      let x = lastOffset.current.X + targetT.clientX - currentOffset.X
      let y = lastOffset.current.Y + targetT.clientY - currentOffset.Y
      lastOffset.current.x = x
      lastOffset.current.y = y
      foceUpdate({
        x, y
      })
    }

    const ondragover = (e) => {
      console.log(e);
      lastOffset.current.X = lastOffset.current.x
      lastOffset.current.Y = lastOffset.current.y
    }
    return [dragStart, ondrag, ondragover]
  }, []);

  useLayoutEffect(() => {
    const dom = currentDom.current
    dom.ondragstart = dragStart
    dom.ondrag = ondrag
    dom.ondragover = ondragover
  }, [])
  return [{ x: lastOffset.current.x, y: lastOffset.current.y }, currentDom]

}
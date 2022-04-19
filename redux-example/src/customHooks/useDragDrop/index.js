import { useDragDrop } from "./useDragDrop";


export function Drag() {

  const [position, domRef] = useDragDrop();

  return <div ref={domRef}
    style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
      width: '100px',
      height: '100px',
      backgroundColor: 'red',
      cursor: 'pointer'
    }} draggable="true">
    drop
  </div>
}
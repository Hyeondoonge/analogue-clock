import { useEffect, useRef } from 'react';
import useMousePosition from '../../hooks/useMousePosition';

export default function MouseTooltip({ text }) {
  const mousePosition = useMousePosition();
  const target = useRef(null);

  useEffect(() => {
    target.current.style.top = `${mousePosition.y - 40}px`;
    target.current.style.left = `${mousePosition.x + 10}px`;
  }, [mousePosition]);

  return (
    <div ref={target} className={`tooltip ${mousePosition.isMouseOn ? 'active' : ''}`}>
      {text}
    </div>
  );
}

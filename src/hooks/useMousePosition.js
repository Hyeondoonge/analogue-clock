import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mousePositionValue } from '../recoil/mousePosition';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useRecoilState(mousePositionValue);

  const mousemoveHandler = (event) => {
    const x = event.pageX;
    const y = event.pageY;

    setMousePosition({ x, y, isMouseOn: true });
  };

  const mouseleaveHandler = () => {
    setMousePosition({ ...mousePosition, isMouseOn: false });
  };

  const initTarget = (target) => {
    if (!target) return;
    target.addEventListener('mousemove', mousemoveHandler);
    target.addEventListener('mouseleave', mouseleaveHandler);
  };

  useEffect(() => {
    return () => {
      if (!target) return;
      target.removeEventListener('mousemove', mousemoveHandler);
      target.removeEventListener('mouseleave', mouseleaveHandler);
    };
  }, []);

  return [initTarget, mousePosition];
}

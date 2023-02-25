import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mousePositionValue, trackTargetValue } from '../recoil/mouse';

export default function useMousePosition() {
  const target = useRecoilValue(trackTargetValue);
  const [mousePosition, setMousePosition] = useRecoilState(mousePositionValue);

  const mousemoveHandler = (event) => {
    const x = event.pageX;
    const y = event.pageY;

    setMousePosition({ x, y, isMouseOn: true });
  };

  const mouseleaveHandler = () => {
    setMousePosition({ ...mousePosition, isMouseOn: false });
  };

  useEffect(() => {
    if (!target) return;
    target.addEventListener('mousemove', mousemoveHandler);
    target.addEventListener('mouseleave', mouseleaveHandler);

    return () => {
      if (!target) return;
      target.removeEventListener('mousemove', mousemoveHandler);
      target.removeEventListener('mouseleave', mouseleaveHandler);
    };
  }, [target]);

  return mousePosition;
}

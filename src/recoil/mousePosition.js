import { atom } from 'recoil';

const mousePositionValue = atom({
  key: 'mouse',
  default: { isMouseOn: false, x: -1, y: -1 }
});

export { mousePositionValue };

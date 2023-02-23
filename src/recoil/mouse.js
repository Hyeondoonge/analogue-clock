import { atom } from 'recoil';

const mouseValue = atom({
  key: 'mouse',
  default: { onClock: false, position: { x: -1, y: -1 } }
});

export { mouseValue };

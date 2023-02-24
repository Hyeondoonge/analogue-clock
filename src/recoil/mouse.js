import { atom } from 'recoil';

const trackTargetValue = atom({
  key: 'trackTarget',
  default: null
});

const mousePositionValue = atom({
  key: 'mouse',
  default: { isMouseOn: false, x: -1, y: -1 }
});

export { trackTargetValue, mousePositionValue };

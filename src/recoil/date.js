const { atom, selector } = require('recoil');

const dateValue = atom({
  key: 'date',
  default: new Date()
});

const formatDateSelector = selector({
  key: 'format-date',
  get: ({ get }) => {
    const date = get(dateValue);

    const seconds = String(date.getSeconds());
    const minutes = String(date.getMinutes());
    const hours = String(date.getHours());

    return { hours, minutes, seconds };
  }
});

export { dateValue, formatDateSelector };

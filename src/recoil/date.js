const { atom, selector } = require('recoil');

const dateValue = atom({
  key: 'date',
  default: new Date()
});

const formatDateSelector = selector({
  key: 'format-date',
  get: ({ get }) => {
    const date = get(dateValue);

    const seconds = String(date.getSeconds()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');

    return { hours, minutes, seconds };
  }
});

export { dateValue, formatDateSelector };

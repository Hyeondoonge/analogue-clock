export const formatDate = (date) => {
  const { hours, minutes, seconds } = date;
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
};

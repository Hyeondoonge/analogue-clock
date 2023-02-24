import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dateValue, formatDateSelector } from '../recoil/date';

export default function useDate() {
  const setDate = useSetRecoilState(dateValue);
  const interval = useRef(
    setInterval(() => {
      setDate(new Date());
    }, 1000)
  );
  const formatDate = useRecoilValue(formatDateSelector);

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return formatDate;
}

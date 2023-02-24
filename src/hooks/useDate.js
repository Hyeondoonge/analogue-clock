import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dateValue, formatDateSelector } from '../recoil/date';

export default function useDate() {
  const setDate = useSetRecoilState(dateValue);
  const interval = useRef(null);
  const formatDate = useRecoilValue(formatDateSelector);

  useEffect(() => {
    interval.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return formatDate;
}

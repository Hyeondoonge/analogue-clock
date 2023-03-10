import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import useDate from '../hooks/useDate';
import { trackTargetValue } from '../recoil/mouse';
import MouseTooltip from './common/MouseTooltip';
import { formatDate } from '../util';

function ClockFace({ date }) {
  const { hours, seconds, minutes } = date;
  const minuteHand = useRef(null);
  const secondHand = useRef(null);
  const hourHand = useRef(null);

  const rotateHands = () => {
    secondHand.current.style.transform = `rotate(${seconds * 6}deg)`;
    minuteHand.current.style.transform = `rotate(${minutes * 6}deg)`;
    hourHand.current.style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`;
  };

  useEffect(() => {
    rotateHands();
  }, [date]);

  return (
    <>
      <div id='middle' className='flag' />;
      <div id='one' className='flag' />
      <div id='three' className='flag' />
      <div id='six' className='flag' />
      <div id='nine' className='flag' />
      <div ref={secondHand} id='second-hand' className='hand' />
      <div ref={minuteHand} id='minute-hand' className='hand' />
      <div ref={hourHand} id='hour-hand' className='hand' />
    </>
  );
}

export default function Clock() {
  const date = useDate();
  const target = useRef(null);
  const setTrackTarget = useSetRecoilState(trackTargetValue);

  useEffect(() => {
    setTrackTarget(target.current);
  }, []);

  return (
    <div ref={target} id='clock'>
      <ClockFace date={date} />
      <MouseTooltip text={formatDate(date)} />
    </div>
  );
}

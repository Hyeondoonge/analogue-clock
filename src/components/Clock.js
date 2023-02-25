import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import useDate from '../hooks/useDate';
import { trackTargetValue } from '../recoil/mouse';
import MouseTooltip from './common/MouseTooltip';
import { formatDate } from '../util';

function ClockMiddle() {
  return <div id='middle' className='flag' />;
}

function ClockDirection() {
  return (
    <>
      <div id='one' className='flag' />
      <div id='three' className='flag' />
      <div id='six' className='flag' />
      <div id='nine' className='flag' />
    </>
  );
}

function ClockHands() {
  const formatDate = useDate();
  const { hours, seconds, minutes } = formatDate;
  const minuteHand = useRef(null);
  const secondHand = useRef(null);
  const hourHand = useRef(null);

  useEffect(() => {
    secondHand.current.style.transform = `rotate(${seconds * 6}deg)`;
    minuteHand.current.style.transform = `rotate(${minutes * 6}deg)`;
    hourHand.current.style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`;
  }, [formatDate]);

  return (
    <>
      <div ref={secondHand} id='second-hand' className='hand' />
      <div ref={minuteHand} id='minute-hand' className='hand' />
      <div ref={hourHand} id='hour-hand' className='hand' />
    </>
  );
}

function ClockFace() {
  return (
    <>
      <ClockMiddle />
      <ClockDirection />
      <ClockHands />
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
      <ClockFace />
      <MouseTooltip text={formatDate(date)} />
    </div>
  );
}

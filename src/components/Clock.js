import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import useDate from '../hooks/useDate';
import useMousePosition from '../hooks/useMousePosition';
import { trackTargetValue } from '../recoil/mouse';

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

function Tooltip() {
  const mousePosition = useMousePosition();
  const { hours, minutes, seconds } = useDate();
  const target = useRef(null);

  useEffect(() => {
    target.current.style.top = `${mousePosition.y - 80}px`;
    target.current.style.left = `${mousePosition.x - 20}px`;
  }, [mousePosition]);

  const formatDate = () => {
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  };

  return (
    <div ref={target} className={`tooltip ${!mousePosition.isMouseOn ? 'active' : ''}`}>
      {formatDate()}
    </div>
  );
}

export default function Clock() {
  const target = useRef(null);
  const setTrackTarget = useSetRecoilState(trackTargetValue);

  useEffect(() => {
    setTrackTarget(target.current);
  }, []);

  return (
    <div ref={target} id='clock'>
      <ClockFace />
      <Tooltip />
    </div>
  );
}

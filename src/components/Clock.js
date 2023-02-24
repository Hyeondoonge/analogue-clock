import { useRef } from 'react';

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
  const minuteHand = useRef(null);
  const secondHand = useRef(null);
  const hourHand = useRef(null);
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
  return (
    <div id='clock'>
      <ClockFace />
    </div>
  );
}

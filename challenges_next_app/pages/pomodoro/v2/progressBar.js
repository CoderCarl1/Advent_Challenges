import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import { SettingsContext } from '../context/settingsContext';

export default function PomodoroCircle({
  key = 1,
  timer = 20,
  animate = true,
  children,
}) {
  // const { stopTimer } = useContext(SettingsContext);
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={['#fe6f6b', 0.33]}
      strokeWidth={6}
      trailColor="#000"
      onComplete={() => stopTimer()}
    >
      {children}
    </CountdownCircleTimer>
  );
}

import { CountdownTimer } from './js/plugin';
import { refs } from './js/domNodes';
import './style.css';

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 11, 2022'),
  onTick: updateClockFace,
});

newTimer.start();

function updateClockFace({ days, hours, mins, secs }) {
  refs.daysNode.textContent = `${days}`;
  refs.hoursNode.textContent = `${hours}`;
  refs.minsNode.textContent = `${mins}`;
  refs.secsNode.textContent = `${secs}`;
}

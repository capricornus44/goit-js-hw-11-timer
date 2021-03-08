export class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }

  start() {
    this.createTimer();

    //Update the count down every 1 second
    setInterval(() => {
      this.createTimer();
    }, 1000);
  }

  createTimer() {
    const deadlineDate = this.targetDate.getTime(); // Set the date we're counting down to
    const currentDate = new Date().getTime(); // time when function will be called
    const deltaTime = deadlineDate - currentDate; // difference between now and the target date
    const time = this.getTimerComponents(deltaTime); // result of function executing -> object
    deltaTime > 0 ? time : this.timeIsOver();
    this.onTick(time);
  }

  // Function takes a numder, returns a string and adds 0 to the beginning if the number consists of less than 2 character
  pad(value) {
    return String(value).padStart(2, '0');
  }

  // Time calculations for days, hours, minutes and seconds
  getTimerComponents(deltaTime) {
    const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  timeIsOver() {
    document.querySelector(this.selector).innerHTML = 'Time is over';
    document.querySelector(this.selector).style.cssText =
      'color: white; font-size: 5em';
  }
}

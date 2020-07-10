class EventSourcer {

  constructor() {
    this.value = 0;
    this.eventTrack = [0];
  }

  add(num) {
    this.value += num;
    this.eventTrack.push(this.value);
  }

  subtract(num) {
    this.value -= num;
    this.eventTrack.push(this.value)
  }

  undo() {
    if (this.eventTrack.length > 1) {
      this.value = this.eventTrack[this.eventTrack.indexOf(this.value) - 1];
    }

  }

  redo() {
    if (this.eventTrack.length > 1) {
      this.callRedoTime += 1;
    }
    this.callRedoTime += this.callRedoTime;
    this.value = this.eventTrack[this.eventTrack.indexOf(this.value) + this.callRedoTime];
  }

  bulk_undo(num) {
    this.value = this.eventTrack[this.eventTrack.lastIndexOf(this.value) - num];
  }

  bulk_redo(num) {
    if (this.eventTrack.length > 1) {
      this.value = this.eventTrack[this.eventTrack.indexOf(this.value) + num];
    }
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;

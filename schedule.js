let AMeetingTimes = [
  [8.5, 9.25],
  [11.5, 12.5],
  [15, 16]
];
let BMeetingTimes = [
  [9, 9.5],
  [10, 11],
  [14, 16]
];

function schedule(
  AMeetingTimes,
  AStartTime,
  AEndTime,
  BMeetingTimes,
  BStartTime,
  BEndTime
) {
  let AFreetime = calFreeTime(AMeetingTimes, AStartTime, AEndTime);
  let BFreetime = calFreeTime(BMeetingTimes, BStartTime, BEndTime);

  // for each free time pair [a, b] and [c, d] bewteen A and B
  // get the [biggest of a, c, smallest of b, d] if second number if bigger than first
  let freePairs = [];

  AFreetime.forEach(currentAFreeTime => {
    BFreetime.forEach(currentBFreeTime => {
      let [a, b] = currentAFreeTime;
      let [c, d] = currentBFreeTime;
      let pair = [a > c ? a : c, b < d ? b : d];
      if (pair[1] > pair[0]) {
        freePairs.push(pair);
      }
    });
  });

  // only leave the pair have at least 30 min (0.5)
  freePairs = freePairs.filter(pair => {
    return pair[1] - pair[0] >= 0.5;
  });
  console.log(freePairs);
}

function calFreeTime(meetingTimes, startWorkTime, endWorkTime) {
  let freeTimes = [];
  if (meetingTimes[0][0] > startWorkTime) {
    freeTimes.push([startWorkTime, meetingTimes[0][0]]);
  }
  for (let i = 0; i < meetingTimes.length - 1; i++) {
    freeTimes.push([meetingTimes[i][1], meetingTimes[i + 1][0]]);
  }
  if (endWorkTime > meetingTimes[meetingTimes.length - 1][1]) {
    freeTimes.push([meetingTimes[meetingTimes.length - 1][1], endWorkTime]);
  }
  return freeTimes;
}

console.log(schedule(AMeetingTimes, 8, 17, BMeetingTimes, 9, 17));

function schedule(meetingTimes) {
  // merge and sort
  let merged = [];
  meetingTimes.forEach(meetingTimeArray => {
    meetingTimeArray.forEach(meetingTime => {
      merged = [...merged, meetingTime];
    });
  });
  // console.log(merged);
  const sorted = merged.sort((a, b) => {
    return a[0] - b[0];
  });
  // console.log(sorted);

  let freeSlots = [];

  while (sorted.length >= 2) {
    let first = sorted[0];
    let second = sorted[1];
    if (second[0] <= first[1]) {
      let newPair = [first[0], second[1]];
      sorted.shift();
      sorted.shift();
      sorted.unshift(newPair);
    } else {
      freeSlots.push([first[1], second[0]]);
      sorted.shift();
    }
  }

  console.log(freeSlots);
}

// let meetingTimes1 = [
//   [
//     [8, 9],
//     [14, 15]
//   ],
//   [
//     [9, 10],
//     [13, 14]
//   ]
// ];

// console.log(schedule(meetingTimes1));
// // merge result: [[8, 10], [13, 15]]
// // free slots: [[10, 13]]

let meetingTimes2 = [
  [
    [8, 8.5],
    [8.6, 9.15]
  ],
  [
    [8.25, 9],
    [13, 14]
  ]
];

console.log(schedule(meetingTimes2));
// free slots: [[9.15, 13]]

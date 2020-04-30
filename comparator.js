const scores = [
  {score: 50, name: 'a'},
  {score: 295, name: 'qi'},
  {score: 100, name: 'john'},
  {score: 50, name: 'b'}
]

// scores.sort((a, b) => {
//   if (a.score === b.score) {
//     if (a.name > b.name) {
//       return -1;
//     } else {
//       return 1;
//     }
//   } else if (a.score < b.score) {
//     return -1;
//   } else {
//     return 1;
//   }
// })

scores.sort((a, b) => {
  if (a.score === b.score) {
    return a.name < b.name ? -1 : 1;
  }
  return b.score - a.score;
})

console.log(scores);
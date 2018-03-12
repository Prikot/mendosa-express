// function createTimer(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//     }, ms || 1000);
//   });
// }
//
// createTimer(1000).then(function () {
//   console.log(1);
//   return createTimer()
// }).then(function () {
//   console.log(1);
//   return createTimer()
// }).then(function () {
//   console.log(1);
//   return createTimer()
// }).then(function () {
//   console.log(1);
//   return createTimer()
// }).then(function () {
//   console.log('конец');
// });
//
// var xhr = new XMLHttpRequest();

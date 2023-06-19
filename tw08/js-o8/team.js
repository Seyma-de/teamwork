// let n = 3;
// let sum = "*";
// console.log(sum);

// for (let i = 0; i < n; i++) {
//   sum += "**";
//   console.log(sum);
// }
//!yildizlarla baklava deseni olusturma
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let star = "*";
//   let space = " ";
//   console.log(`${space.repeat(n - i)}${star.repeat(2 * i - 1)}`);
// }

// for (let i = n; i >= 1; i--) {
//   let star = "*";
//   let space = " ";
//   console.log(`${space.repeat(n - i)}${star.repeat(2 * i - 1)}`);
// }
//!for dongusu ile ucgen desen olusturmalet n = 5;
// let pattern = "";

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         pattern += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//     pattern += "*";
//     }
//     pattern += "\n";
// }
// console.log(pattern);
//! baklava deseni function ile olusturma
function baklava(n) {
  for (let i = 1; i <= n; i++) {
    let star = "*";
    let space = " ";
    console.log(`${space.repeat(n - i)}${star.repeat(2 * i - 1)}`);
  }
  for (let i = n; i >= 1; i--) {
    let star = "*";
    let space = " ";
    console.log(`${space.repeat(n - i)}${star.repeat(2 * i - 1)}`);
  }
}

baklava(20);

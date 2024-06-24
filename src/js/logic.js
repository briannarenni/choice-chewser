export function flipCoin () {
  let randNumber = Math.floor(Math.random() * 2) + 1;
  return randNumber === 1;
}

export function range (min, max) {
  return Array.from(new Array(max - min + 1).keys()).map(function (num) {
    return num + min;
  });
}

export function outOfTen () {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

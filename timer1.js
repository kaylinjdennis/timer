let times = process.argv.slice(2);
times = times.map(str => Number(str));

for (let time of times) {
  if (time >= 0 && Number.isInteger(time)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}
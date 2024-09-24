const beepCount = process.argv.slice(2);

if (beepCount.length > 0) {
  for (const beep of beepCount) {
    let val = Number(beep);
    if (Number.isInteger(val) && val > 0) {
      setTimeout(() => {
        process.stdout.write(".");
      }, val * 100);
    }
  }
}

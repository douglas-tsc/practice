console.log(process.argv.slice(2).reduce((arr, val) => {
  return arr += +val;
}, 0));

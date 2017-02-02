var filterFn = require('./myModule.js');

filterFn(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    return console.error('There was an error:', err);
  }

  data.forEach((file) => {
    console.log(file);
  });
});

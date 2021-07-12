const q1 = require('./interview-question/q1');

q1.getAllApplicationNamesSortedByID()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });


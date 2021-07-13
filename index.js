const q1 = require('./interview-question/q1');
const q2 = require('./interview-question/q2');
const appMetadataService = require('./mock-service/appMetadataService');

// This file is to help you run some quick integration test if needed.
// You should check your code by running unit test `npm run test`
// You are NOT required to use this file, but feel free to use it for trouble shooting if needed.

q1.getAllApplicationNamesGroupedByTeam()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

q2.getAllApplicationNamesGroupedByTeamWithPagination()
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error(err);
  });

appMetadataService.getAllApplicationMetadataWithPagination(10, 10)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

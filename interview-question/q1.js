const appMetadataService = require('../mock-service/appMetadataService');

console.log('This is question #1. Good luck!');

/*
This problem tests your skills working with Promise.

appMetadataService module has a function getAllApplicationMetadata that returns a list of application metadata,
e.g.
[
  {
    id: 0,
    appName: "app_0",
    team: "Delivery_Platform"
  },
  {
    id: 1,
    appName: "app_1",
    team: "Developer_Experience"
  },
  {
    id: 2,
    appName: "app_2",
    team: "Developer_Experience"
  },
  ...
]

Your goal is to call getAllApplicationMetadata() function to get all raw application metadata.
Then, return the applications names grouped by team name in the following format
{
  Delivery_Platform: [app_0, ...],
  Developer_Experience: [app_1, app_2, ...]
}

You are free to choose to use either promise chains or async/await to handle functions that return a promise.
It's a PLUS/BONUS if you use async/await syntax.
 */
async function getAllApplicationNamesGroupedByTeam() {
  // TO-DO
}

module.exports = {
  getAllApplicationNamesGroupedByTeam
};

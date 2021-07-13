const appMetadataService = require('../mock-service/appMetadataService');

console.log('This is question #2. Good luck!');

const API_PAGINATION_MAX_LIMIT = 10; // You should NOT change this value.

/*
This problem tests your skills working with paginated API responses and usage of recursion.
In this question, you are expected to return the same schema of applications names grouped by team name as you saw in problem 1.
However, you are now expected to call getAllApplicationMetadataWithPagination(offset, limit) method with pagination.
e.g.
if you call getAllApplicationMetadataWithPagination(0, 10), it will return something like,
[
  { id: 0, appName: "app_0", team: "Developer_Experience" },
  { id: 1, appName: "app_1", team: "Delivery_Platform" },
  ...
  { id: 8, appName: "app_8", team: "Delivery_Platform" },
  { id: 9, appName: "app_9", team: "Developer_Experience" }
]

if you call getAllApplicationMetadataWithPagination(10, 10), it will return something like,
[
  { id: 10, appName: "app_10", team: "Delivery_Platform" },
  { id: 11, appName: "app_11", team: "Delivery_Platform" },
  ...
  { id: 18, appName: "app_18", team: "Developer_Experience" },
  { id: 19, appName: "app_19", team: "Delivery_Platform" }
]

getAllApplicationMetadataWithPagination will return an empty list once you've exhausted all of its values.

Besides this difference, everything else stays pretty much the same.

Note, if your first try is to use the iterative approach, that's okay.
But we are expecting you to be able to use the recursive approach as well.
(For the recursive implementation, you can use Google search to find online examples)
 */
async function getAllApplicationNamesGroupedByTeamWithPagination() {
  // TO-DO
}

module.exports = {
  getAllApplicationNamesGroupedByTeamWithPagination
};

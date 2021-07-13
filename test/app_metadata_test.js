const chai = require('chai');
const q1 = require('../interview-question/q1');
const q2 = require('../interview-question/q2');

const expect = chai.expect;

describe('App Metadata Test', () => {
  it ('Question 1 should return apps grouped by team', async () => {
    const appsByTeam = await q1.getAllApplicationNamesGroupedByTeam();
    expect(appsByTeam.Developer_Experience.length).to.equal(4);
    expect(appsByTeam.Delivery_Platform.length).to.equal(6);
    expect(appsByTeam.Developer_Experience.indexOf('app_0')).to.not.equal(-1);
    expect(appsByTeam.Delivery_Platform.indexOf('app_0')).to.equal(-1);
  });

  it('Question 2 should return appsByTeam with results from paginated API', async () => {
    const appsByTeam = await q2.getAllApplicationNamesGroupedByTeamWithPagination();
    expect(appsByTeam.Developer_Experience.length).to.equal(68);
    expect(appsByTeam.Delivery_Platform.length).to.equal(135);
    expect(appsByTeam.Developer_Experience.indexOf('app_0')).to.not.equal(-1);
    expect(appsByTeam.Delivery_Platform.indexOf('app_0')).to.equal(-1);
  });
});

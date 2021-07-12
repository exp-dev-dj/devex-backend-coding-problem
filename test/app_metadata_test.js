const chai = require('chai');
const q1 = require('../interview-question/q1');

const expect = chai.expect;

describe('App Metadata Test', () => {
  it ('should return apps grouped by team', async () => {
    try {
      const appsByTeam = await q1.getAllApplicationNamesGroupedByTeam();
      expect(appsByTeam.Developer_Experience.length).to.equal(4);
      expect(appsByTeam.Delivery_Platform.length).to.equal(6);
      expect(appsByTeam.Developer_Experience.indexOf('app_0')).to.not.equal(-1);
      expect(appsByTeam.Delivery_Platform.indexOf('app_0')).to.equal(-1);
    } catch (e) {
      console.error(e);
    }
  })
});

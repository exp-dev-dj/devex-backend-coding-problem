
function getAllApplicationMetadata () {
  return new Promise(((resolve, reject) => {
    try {
      const totalApps = 10;
      const appMetadataList = [];
      for (let i=0; i<totalApps; i++) {
        const team = (i % 3 == 0) ? 'Developer_Experience' : 'Delivery_Platform';
        appMetadataList.push({
          id: i,
          appName: `app_${i}`,
          team
        });
      }
      resolve(appMetadataList);
    } catch (e) {
      reject(e);
    }
  }));
}

module.exports = {
  getAllApplicationMetadata
};

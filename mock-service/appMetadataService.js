function populateAppMetadataList(start, size) {
  if (size < 1) return [];
  const appMetadataList = [];
  for (let i = start; i < start + size; i++) {
    const team = (i % 3 == 0) ? 'Developer_Experience' : 'Delivery_Platform';
    appMetadataList.push({
      id: i,
      appName: `app_${i}`,
      team
    });
  }
  return appMetadataList;
}

function getAllApplicationMetadata () {
  return new Promise(((resolve, reject) => {
    try {
      const appMetadataList = populateAppMetadataList(0, 10);
      resolve(appMetadataList);
    } catch (e) {
      reject(e);
    }
  }));
}

function getAllApplicationMetadataWithPagination (offset, limit = 10) {
  const totalNumOfApps = 203; // You should NOT expect to know this value as it's constantly changing in real world scenario
  return new Promise(((resolve, reject) => {
    if (limit > 10) {
      reject(new Error(`Pagination limit ${limit} exceeds the max limit of 10.`));
    }
    try {
      const size = (offset + limit <= totalNumOfApps - 1) ? limit : totalNumOfApps - offset;
      const appMetadataList = populateAppMetadataList(offset, size);
      resolve(appMetadataList);
    } catch (e) {
      reject(e);
    }
  }));
}

module.exports = {
  getAllApplicationMetadata,
  getAllApplicationMetadataWithPagination
};

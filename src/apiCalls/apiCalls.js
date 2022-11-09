// Remove: when pulling data from API
import climberData from '../testData/climber-data';
import competitionData from '../testData/competition-data';

const returnTestData = (path) => {
  if (path === '/climbers') {
    return climberData;
  } else if (path === '/competitions') {
    return competitionData;
  }
}

const getData = async (path) => {
  try {
    let response = await returnTestData(path);
    // let data = await response.json();
    let data = response;
    return data;
  } catch (error) {
    console.log('Dang it');
  }
}

export { getData };
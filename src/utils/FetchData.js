import Axios from 'axios';

const url = 'https://api.myjson.com/bins/kigxj';

class CarsService {
  getAllData() {
    return Axios({
      method: 'get',
      url
    });
  }
}

export default new CarsService();
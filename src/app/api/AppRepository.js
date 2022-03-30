import BaseRepository from './../../package/baseRepository.js';

class AppRepository extends BaseRepository {
  constructor() {
      super();
      this.hostUrl = 'https://jsonplaceholder.typicode.com/';
  }
}

export default AppRepository;
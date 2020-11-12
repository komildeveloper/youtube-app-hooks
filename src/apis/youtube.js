import axios from 'axios';

const KEY = 'AIzaSyAGG2O_JNspTX9PyEqzPUqGVMPWpSbcoyw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    maxResults: 50,
    key: KEY
  }
});

let axios = require("axios");


const axiosPlaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 9000,
    headers: {'X-Custom-Header': 'foobar'}
  });

module.exports = axiosPlaceholder;
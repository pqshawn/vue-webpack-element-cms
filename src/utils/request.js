const axios = require('axios');


axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });



// axios.post('/user', {
// firstName: 'Fred',
// lastName: 'Flintstone'
// })
// .then(function (response) {
// console.log(response);
// })
// .catch(function (error) {
// console.log(error);
// });
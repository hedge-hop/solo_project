const axios = require('axios');

axios.get('https://lightning-yoga-api.herokuapp.com/yoga_poses').then(console.log).catch(console.log);

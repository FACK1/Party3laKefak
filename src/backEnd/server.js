const app = require('./app.js');
const { seq } = require('../database/models/index.js');

seq.then(() => {
  app.listen(app.get('port'), () => {
  console.log('Our app running  on port', app.get('port')); //eslint-disable-line
  });
}).catch(err => console.log('err', err));     //eslint-disable-line

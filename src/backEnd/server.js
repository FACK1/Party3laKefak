const app = require('./app.js');
const { seq } = require('../database/models/index.js');

seq
.then(() => console.log('DB connected'))
.catch(err => console.log('err', err));

app.listen(app.get('port'), () => {
console.log('Our app running  on port', app.get('port'));
});

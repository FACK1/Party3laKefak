const app = require('./app.js');
const seq = require('../database/models/index.js');
const db = require('../database/config/dbConnection.js');

db.authenticate()
  .then(()=>console.log('DB connected'))
  .catch(err => console.log("err"));

app.get('/',(req,res)=>{res.send("INDEX");});

app.listen(app.get('port'), () => {
  console.log(`Our app running  on port`, app.get('port'));
});

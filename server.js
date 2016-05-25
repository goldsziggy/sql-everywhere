/* eslint no-console: 0 */

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import low from 'lowdb'
import storage from 'lowdb/file-sync';
import config from './webpack.config.development';
import {get_all_database_types, test_db} from './server/db';

const app = express();
const compiler = webpack(config);
const PORT = 3000;

const db_state = low(__dirname + '/db.json', {
    storage
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.post('/api/database/test_connection', function(req,res){
  res.setHeader('Content-Type', 'application/json');
  //type, database_host, database_port, user, password, database_name
  test_db(req.body.db_type, req.body.db_host, req.body.db_port, req.body.db_user, req.body.db_pass, req.body.db_name)
  .then(function(message){
    res.send({message: message});
  })
  .catch(function(message){
    // var mes = message ? message : "Unknown Error Occurred";
    if (message instanceof Error) {
      message = message.message;
    }
    
    // var err = JSON.stringify({error: message})
    res.status(500).send({error: message});
  })
});

app.get('/api/database/types',function(req,res){
  // console.log(db);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(get_all_database_types()));
})

app.get('/api/state', function(req, res) {
    // the user was found and is available in req.user
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(db_state('state').value()));
});

//Note: We can encrypt data at this level as well...
app.post('/api/state', function(req, res) {
    var state = req.body.state;
    //remove previous state and set the new one...
    // delete db.object.state;
    // db.write();
    db_state('state').remove({});
    db_state('state').push(state);
    res.send('it worked');
});




app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

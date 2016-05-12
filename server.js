/* eslint no-console: 0 */

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import low from 'lowdb'
import storage from 'lowdb/file-sync';
import config from './webpack.config.development';

const app = express();
const compiler = webpack(config);
const PORT = 3000;

const db = low(__dirname + '/db.json', {
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



app.get('/api/state', function(req, res) {
    // the user was found and is available in req.user
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(db('state').value()));
});

//Note: We can encrypt data at this level as well...
app.post('/api/state', function(req, res) {
    var state = req.body.state;
    //remove previous state and set the new one...
    // delete db.object.state;
    // db.write();
    db('state').remove({});
    db('state').push(state);
    res.send('it worked');
});




app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

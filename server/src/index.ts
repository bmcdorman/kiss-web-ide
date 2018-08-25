import * as express from 'express';

import config from './config';

import { watch } from './webpack';

const app = express();

app.get('*', (req, res) => {

});

watch().subscribe(
  stats => {
    console.log(stats.toString())
  },
  error => console.error(error)
);

app.listen(config.port, () => {
  console.log(`KISS Web IDE listening on :${config.port}`)
});
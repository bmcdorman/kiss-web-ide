import * as express from 'express';

import config from './config';

import { watch } from './webpack';

import * as path from 'path';

import { readFile } from './fs';

import * as morgan from 'morgan';

import projectPaths from './project-paths';

const app = express();

app.use(morgan('dev'));

const CONTENT_TYPE: { [ext: string]: string } = {
  'js': 'application/javascript',
  'css': 'text/css'
};

/**
 * Handles a request for an unknown file in a certain dir
 */
const staticUrlRequest = (dirPath: string, binary?: boolean) => async (req: express.Request, res: express.Response) => {
  const ext = path.extname(req.url);
  try {
    const file = await readFile(`${dirPath}${req.url}`, !binary ? 'utf8' : undefined);

    const contentType = CONTENT_TYPE[ext];
    if(contentType !== undefined) res.setHeader('Content-Type', contentType);

    return res.status(200).send(file);
  } catch(e) {
    return res.status(404).send();
  } finally {
    res.end();
  }
};

/**
 * Handles a request for a fixed file path (e.g. index.html)
 */
const staticFileRequest = (filePath: string, binary?: boolean) => {
  const ext = path.extname(filePath);
  const contentType = CONTENT_TYPE[ext];

  return async (req: express.Request, res: express.Response) => {
    
    try {
      const file = await readFile(`${filePath}`, !binary ? 'utf8' : undefined);
      
      if(contentType !== undefined) res.setHeader('Content-Type', contentType);

      return res.status(200).send(file);
    } catch(e) {
      return res.status(404).send();
    } finally {
      res.end();
    }
  };
};

app.get('*.js', staticUrlRequest(projectPaths.build));
app.get('/fonts/*', staticUrlRequest(projectPaths.static, true));

app.get('/style.css', staticFileRequest(path.join(projectPaths.static, 'style.css')));

app.use(staticFileRequest(path.join(projectPaths.static, 'index.html')));

watch().subscribe(
  stats => {
    console.log(stats.toString())
  },
  error => console.error(error)
);

app.listen(config.port, () => {
  console.log(`KISS Web IDE listening on :${config.port}`)
});
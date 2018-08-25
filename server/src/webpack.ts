import * as webpack from 'webpack';

import devConfig from './webpack.dev.config';

import * as R from 'rxjs';

const dev = webpack(devConfig);

export const compile = () => new Promise<webpack.Stats>((resolve, reject) => {
  dev.run((error, stats) => {
    if(error) return reject(error);

    resolve(stats);
  });
});

export const watch = () => new R.Observable<webpack.Stats>(sub => {
  dev.watch({}, (error, stats) => {
    if(error) return sub.error(error);
    sub.next(stats);
  });
});



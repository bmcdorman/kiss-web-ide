import * as path from 'path';

const ROOT_DIR = path.join(__dirname, '..', '..');
const BUILD_DIR = path.join(__dirname, 'build');
const CLIENT_DIR = path.join(ROOT_DIR, 'client');
const SERVER_DIR = path.join(ROOT_DIR, 'server');
const STATIC_DIR = path.join(ROOT_DIR, 'static');

const CLIENT_SRC_DIR = path.join(CLIENT_DIR, 'src');

export default {
  root: ROOT_DIR,
  build: BUILD_DIR,
  client: CLIENT_DIR,
  clientSource: CLIENT_SRC_DIR,
  server: SERVER_DIR,
  static: STATIC_DIR
};
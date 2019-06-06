import * as express from 'express';
import * as path from 'path';
import * as winston from 'winston';

import * as config from './config.json';

const app = express();
const router = express.Router();
const INDEX_PATH = path.join(__dirname, '..', '..', 'client', 'dist', 'index.html');
const STATIC_PATH = path.join(__dirname, '..', '..', 'client', 'dist');

router.get('/', (_req, res: express.Response) => {
  res.sendFile(INDEX_PATH);
});

app.use(express.static(STATIC_PATH))
app.use(router);
app.listen(config.port, () => {
  winston.info(`Connection established on port: ${config.port}`);
});

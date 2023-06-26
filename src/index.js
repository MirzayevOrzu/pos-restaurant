import express from 'express';
import config from './shared/config/index.js';
import handleErrors from './shared/errors/handle.js';
import api from './modules/api.js';

const app = express();

app.use(express.json());

app.use('/api', api);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use(handleErrors);

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});

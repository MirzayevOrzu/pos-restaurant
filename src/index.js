import express from 'express';
import config from './shared/config/index.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});

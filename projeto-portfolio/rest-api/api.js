const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 3000;
const router = express.Router();

const portfolioRouter = require('./router/portfolioRouter');

api.use(cors());
api.use(bodyparser.urlencoded({ extends: true }));
api.use(bodyparser.json());

router.get('/', (req, res) => res.json({
  mensagem: 'API está online'
}));

api.use('/', router);
api.use('/portfolio', portfolioRouter);

// config server
api.listen(port);
console.log('API está rodando');
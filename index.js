//Require -> trae todo de node_modules(Viene siendo imports)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8080;
const app = express();
const routes = require('./routes');
const db = require('./models');

app.use(bodyParser.json());

//Cross Origin (Todo lo que venga del front)
const corsOptions = {
    origin: 'http://localhost:3000', //Esta corriendo el front
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various
}

app.use(cors(corsOptions));
app.use('/api', routes);

//db.sequelize.sync();

//Conceptos basicos de backend
//req - Request
//res - Response
app.get('/', (req, res) => {
    res.send('Server working');
});

app.listen(port, () => {
    console.log(`Server corriendo on port ${port}`);
});


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDatabase = require('./database/db')
const router = require('./routes/inscritos.routes')

connectDatabase()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 3001

app.use("/", router);

app.listen(port, () => {console.log('listening on 3001')})
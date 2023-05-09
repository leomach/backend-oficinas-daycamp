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

app.use("/", router);

app.listen(8080, () => {console.log('listening on 8080')})
const express = require('express');
const connectDB = require('./database');
const morgan = require('morgan');
// REVIEW import bodyParser from 'body-parser';
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

// app middleware
const app = express();

//db
connectDB();

//middlewares
app.use(morgan('dev'));
// REVIEW app.use(bodyParser.json({ limit: '2mb' })); // deprecada para > v14 nodejs
app.use(express.json({ limit: '2mb' })); // configuracion estandar
app.use(cors());

// fs - readdirSync - lectura de rutas
readdirSync(`./routes`).map((r) => app.use("/api", require(`./routes/${r}`)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
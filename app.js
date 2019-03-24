const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

//Environtment Variables
require('dotenv').config()

//Connect to Database
require("./config/db");

app.use(express.json());

app.use('/api/v1/itemins', require('./routes/itemins'))
app.use('/api/v1/itemouts', require('./routes/itemouts'))
app.use('/api/v1/items', require('./routes/items'))
app.use('/api/v1/outcomes', require('./routes/outcomes'))


const PORT = process.env.PORT || 3003;
app.listen(PORT, console.log(`Server started on Port ${PORT}`))
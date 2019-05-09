const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

//Environtment Variables
require("dotenv").config();

//Connect to Database
require("./config/db");

app.use(express.json());

app.use("/api/v1/itemins", require("./routes/itemins"));
app.use("/api/v1/itemouts", require("./routes/itemouts"));
app.use("/api/v1/items", require("./routes/items"));
app.use("/api/v1/outcomes", require("./routes/outcomes"));
app.use("/api/v1/outcomeins", require("./routes/outcomeins"));
<<<<<<< HEAD
// app.use("/api/v1/mreports", require("./routes/mreports"));
// app.use("/api/v1/dreports", require("./routes/dreports"));
=======
>>>>>>> 47b7aab3064737cc6d8fb864c9f1bb986fed0e5d

const PORT = process.env.PORT || 3003;
app.listen(PORT, console.log(`Server started on Port ${PORT}`));

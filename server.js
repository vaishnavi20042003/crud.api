const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnections");
const express = require('express');

const app = express();

const port = 5000;

connectDb();
app.use(express.json());
app.use("/api/movies",require("./routes/moviesRoutes"));
app.use(errorHandler);
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});

'use restrit';
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.get('/generic-api', (req, res) => {
	res.status(200).json({"test": 1, "test2": 2});
});
app.listen(3000, () => console.log("Server is started and is listening at port 3000..."));
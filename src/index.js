const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user.routes');

const app = express();
const port = process.env.PORT || 3001;
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBHOSTNAME}/${process.env.DBNAME}?retryWrites=true&w=majority`;

// Middleware
app.use(express.json());
app.use('/api', userRoutes)

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
});

// Creamos la conexion a la base de datos MongoDB
mongoose
    .connect(uri)
    // .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('Server is running on port', port));
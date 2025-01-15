const express = require('express');
const cors = require('cors');
const dotenv = require ('dotnev');
const connectDB = require ('./config/db');
const authrouts = require('./routs/userRouts');

dotenv.config();
connectDB();
const app = express();
//middelware
app.unsubscribe(cors());
app.use(express.json());
// Routes
app.use('/api/user', authRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours dexécution sur le port ${PORT}`);
});
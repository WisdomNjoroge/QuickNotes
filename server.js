import express from 'express';
import sequelize from './config/database.js';
import noteRoutes from './routes/noteRoutes.js';


const app = express();


// Middleware
app.use(express.json());


// Routes
app.use('/api/notes', noteRoutes);



// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.sync();
});
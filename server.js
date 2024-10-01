import express from 'express';
import sequelize from './config/database.js';
import router from './routes/noteRoutes.js';


const app = express();


// Middleware
app.use(express.json());

injectMiddlewares(app);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

injectRoutes(server);
startServer(server);


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.sync();
});

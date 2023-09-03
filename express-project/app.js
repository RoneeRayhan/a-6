const express = require('express');
const app = express();
const apiRouter = require('./src/Routes/api');

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

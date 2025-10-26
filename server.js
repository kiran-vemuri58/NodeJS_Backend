import app from './src/app.js';
import dbConnect from './src/config/database.js';

dbConnect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
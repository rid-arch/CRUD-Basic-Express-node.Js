require('dotenv').config();
const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // ← tambahkan ini

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes); // ← ubah jadi seperti ini (disatukan lewat '/api')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

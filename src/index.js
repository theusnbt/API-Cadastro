import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5675;

app.listen(PORT, () => {
    console.log(`Listen in the PORT: ${PORT}.`)
});
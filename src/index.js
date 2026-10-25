import app from './app.js';
import dotenv from 'dotenv';
import startDB from './db/db.js'

dotenv.config();
startDB();

const PORT = 5675;

app.listen(PORT, () => {
    console.log(`Listen in the PORT: ${PORT}.`)
});
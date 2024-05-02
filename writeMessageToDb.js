const path = require('path');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();


const pathToDb = path.join(
    __dirname,
    process.env.DATABASE_FILENAME)
// Connect to the SQLite database
const db = new sqlite3.Database(pathToDb);

// WebSocket message handler
const handleMessage = (message) => {
    // Write the received message to the database
    console.log('writing message to database')
    db.run('INSERT INTO messages (message) VALUES (?)', [message], (err) => {
        if (err) {
            console.error('Error writing message to SQLite database:', err);
        } else {
            console.log('Message written to SQLite database:', message);
        }
    });
};

module.exports = {
    handleMessage,
};

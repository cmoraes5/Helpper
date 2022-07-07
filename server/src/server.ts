import express from 'express'

const app = express();

app.post('/users', (req, res) => {
    return res.send('Hello World 2'); 
})

app.listen(3333, () => {
    console.log('HTTP server running!');
});

// SQLite
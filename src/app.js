const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Shopix</h1>')
});

app.use('/categories', require('./routes/categories'));

app.listen(3000, () => {
    console.log('Server started')
})
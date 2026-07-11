let express = require('express');
let app = express();
let port = 9000;
let cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
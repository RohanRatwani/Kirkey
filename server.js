const express =  require('express')
const authorroutes = require('./src/authors/routes')

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.redirect('/author_name')
});

app.use('/author_name', authorroutes)

app.listen(port,() => console.log(`Sever is now running on Port: ${port}`))
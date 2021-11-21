const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const articles = [{title: 'example'}];

app.set('port', process.env.PORT || 3000);
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))


app.get('/', (req, res, next) => {
    res.send(articles)
})

app.post('/article', (req, res, next) => {
    articles.push(req.body)
    res.send(req.body);
})

app.get('/user', (req, res) => {
    res.send({
        name: "KarenZohrabyan",
    })
})

app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'));
});
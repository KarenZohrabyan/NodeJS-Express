const express = require("express");
const app = express();
const articles = [{title: 'example'}];

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res, next) => {
    res.send(articles)
})

app.post('/article', (req, res, next) => {
    res.send('OK');
})

app.get('/user', (req, res) => {
    res.send({
        name: "KarenZohrabyan",
    })
})

app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'));
});
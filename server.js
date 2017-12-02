const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'));

app.post('/users', (req, res) => res.render('show', { user: req.body }));

app.listen(3000, () => console.log('Listening on 3000'));

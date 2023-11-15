const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Air Fly - Home' });
});

app.get('/flights', (req, res) => {
  res.render('flights', { title: 'Air Fly - Flights' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Air Fly - Contact' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

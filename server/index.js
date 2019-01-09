const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const cors = require('cors')


const app = express();

app.use(`/restaurants/:id/`, express.static(`${__dirname}/../client/dist`));
app.use(bodyParser());
app.use(cors());

app.get(`/api/reservations/restaurantID=:restaurantID&date=:date`, (req, res) => {
  db.getReservations(req.params.restaurantID, req.params.date, (results) => {
    console.log('results', JSON.parse(results));
    res.end(results);
  });
});

app.post(`/api/reservations/`, (req, res) => {
  db.addReservation(req.body.restaurantID, req.body.date, req.body.time, req.body.partySize, () => {
    res.end();
  });
});

app.delete(`/api/reservations/restaurantID=:restaurantID&date=:date`, (req, res) => {

});

app.put(`/api/reservations/restaurantID=:restaurantID&date=:date`)

const port = 3002;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(bodyParser.json());



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
  database: 'nst'
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL Database!');
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM admins WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      const admin = result[0];
      const role = 'admin';
      const token = jwt.sign({ id: admin.id, email: admin.email, role: role }, 'your_secret_key');
      res.send({ token });
    } else {
      res.send({ message: 'Mauvaise combinaison email/mot de passe !' });
    }
  });
});

// Handle event creation without file upload
app.post('/AddEvent', (req, res) => {
  console.log('Request body:', req.body);
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  const query = 'INSERT INTO events (title, description, date) VALUES (?, ?, ?)';
  db.query(query, [title, description, date], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send({ error: 'Failed to add event' });
    }
    res.send({ message: 'Event added successfully!', eventId: result.insertId });
  });
});
// Fetch all events
app.get('/events', (req, res) => {
  const query = 'SELECT * FROM events';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send({ error: 'Failed to fetch events' });
    }
    res.send(results);
  });
});

// Update event by ID
app.put('/events/:id', (req, res) => {
  const { title, description, date } = req.body;
  const eventId = req.params.id;

  const query = 'UPDATE events SET title = ?, description = ?, date = ? WHERE id = ?';
  db.query(query, [title, description, date, eventId], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send({ error: 'Failed to update event' });
    }
    res.send({ message: 'Event updated successfully' });
  });
});

// Delete event by ID
app.delete('/events/:id', (req, res) => {
  const eventId = req.params.id;

  const query = 'DELETE FROM events WHERE id = ?';
  db.query(query, [eventId], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send({ error: 'Failed to delete event' });
    }
    res.send({ message: 'Event deleted successfully' });
  });
});


app.listen(5000, () => {
  console.log('Server running on port 5000');
});

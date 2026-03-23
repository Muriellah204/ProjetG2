const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const dbFile = path.join(__dirname, 'auth.db');
const db = new sqlite3.Database(dbFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Init DB
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  )`);
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ success: false, message: 'Email et mot de passe requis.' });
  const hash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
  stmt.run(email, hash, function (err) {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT') return res.status(409).json({ success: false, message: 'Email déjà utilisé.' });
      return res.status(500).json({ success: false, message: 'Erreur serveur.' });
    }
    res.json({ success: true, message: 'Inscription réussie.' });
  });
  stmt.finalize();
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ success: false, message: 'Email et mot de passe requis.' });
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) return res.status(500).json({ success: false, message: 'Erreur serveur.' });
    if (!row) return res.status(401).json({ success: false, message: 'Identifiants invalides.' });
    const match = bcrypt.compareSync(password, row.password_hash);
    if (!match) return res.status(401).json({ success: false, message: 'Identifiants invalides.' });
    // Pour une démo simple on renvoie succès. En vrai, créer une session ou JWT.
    res.json({ success: true, message: 'Connexion réussie.' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

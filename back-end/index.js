const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hitallo',
});

app.use(cors());
app.use(express.json());

app.post('/cadastro', (req, res) => {
  const { name } = req.body;
  const { numero } = req.body;

  let SQL = 'INSERT INTO contatos ( name, numero) VALUES (?,?)';

  db.query(SQL, [name, numero], (err, result) => {
    if (name == null) console.log(err);
  });
});

app.get('/contatos', (req, res) => {
  let SQL = 'SELECT * FROM  contatos';

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put('/edit', (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { numero } = req.body;
  let SQL = 'UPDATE contatos SET name = ?, numero = ? WHERE id = ?';

  db.query(SQL, [name, numero, id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
    console.log('atualizado');

    console.log(result);
  });
});
app.delete('/delete/:id', (res, req) => {
  1;
  let SQL = 'DELETE FROM contatos WHERE id = ?';
  db.query(SQL, [id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log('Rondando servidor!');
});

import { Pool } from 'pg';

const pool = new Pool({
  user: "david",
  host: "localhost",
  password: "admin",
  database: "db_geeks",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

export default pool;

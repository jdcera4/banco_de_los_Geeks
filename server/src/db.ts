import { Pool } from 'pg';

const pool = new Pool({
  user: "david",
  host: "localhost",
  password: "admin",
  database: "db_geeks",
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

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

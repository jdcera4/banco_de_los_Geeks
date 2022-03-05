import { Pool } from 'pg';

const pool = new Pool({
  user: "david",
  host: "127.0.0.1",
  database: "db_geeks",
  password: "root",
  port: 5432,
});
export default pool;

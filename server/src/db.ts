import { Pool } from 'pg';

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  database: "firstapi",
  port: 5432,
});
export default pool;

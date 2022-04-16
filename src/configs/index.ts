import dotenv from 'dotenv';
import { Pool } from 'pg';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export = {
  db,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  PORT: process.env.PORT,
};

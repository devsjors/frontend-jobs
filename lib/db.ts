import pg, { type QueryResultRow } from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT ?? ""),
});

export const db = {
  query: async <T extends QueryResultRow>(query: string, variables?: any[]) => {
    return pool.query<T>(query, variables);
  },
};

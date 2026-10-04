import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";

dotenv.config();

const poolConfig: PoolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: {
        rejectUnauthorized: false,
      },
    };

export const pool = new Pool(poolConfig);

export const connectDB = async (): Promise<void> => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    console.log("PostgreSQL connected successfully at:", result.rows[0].now);
    client.release();
  } catch (error) {
    console.error("Failed to connect to PostgreSQL:", error);
    process.exit(1);
  }
};

export default pool;

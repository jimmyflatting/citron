import { Pool } from 'pg';

export class Database {
  public pool: Pool;
  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    });
  }

  async verifyConnection(): Promise<void> {
    try {
      const client = await this.pool.connect();
      console.log(`Connected to ${process.env.DB_NAME} database`);
      client.release();
    } catch (error) {
      console.error('Error connecting to the database:', error);
      process.exit(1);
    }
  }

  query(text: string, params?: any[]) {
    return this.pool.query(text, params);
  }
}

const db = new Database();
export default db;

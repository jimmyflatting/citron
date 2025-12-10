import db from './database.js';

interface BaseRecord {
  id?: number;
}
class BaseModel<T extends BaseRecord> {
  protected static tableName: string;

  static async findOne<T extends BaseRecord>(id: number): Promise<T | null> {
    const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
    const res = await db.query(query, [id]);
    return res.rows[0] || null;
  }

  static async create<T extends BaseRecord>(data: Omit<T, 'id'>): Promise<T> {
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data);
    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');

    const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders}) RETURNING *`;
    const res = await db.query(query, values);
    return res.rows[0];
  }

  static async update<T extends BaseRecord>(id: number, data: Partial<Omit<T, 'id'>>): Promise<T> {
    const updates = Object.entries(data).map(([key, value], index) => `${key} = $${index + 1}`);
    const query = `UPDATE ${this.tableName} SET ${updates.join(', ')} WHERE id = $${Object.entries(data).length + 1} RETURNING *`;
    const res = await db.query(query, [...Object.values(data), id]);
    return res.rows[0];
  }

  static async delete(id: number): Promise<void> {
    const query = `DELETE FROM ${this.tableName} WHERE id = $1`;
    await db.query(query, [id]);
  }

  static async findAll<T extends BaseRecord>(): Promise<T[]> {
    const query = `SELECT * FROM ${this.tableName}`;
    const res = await db.query(query);
    return res.rows;
  }
}

export { BaseModel };
export type { BaseRecord };

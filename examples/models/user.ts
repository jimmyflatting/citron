import { BaseModel, BaseRecord } from '../../lib/models.js';
import db from '../../lib/database.js';

interface UserRecord extends BaseRecord {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
}

class User extends BaseModel<UserRecord> {
  static tableName = 'users';

  static async findByEmail(email: string): Promise<UserRecord | null> {
    const query = `SELECT * FROM ${this.tableName} WHERE email = $1`;
    const res = await db.query(query, [email]);
    return res.rows[0] || null;
  }

  static async createUser(userData: Omit<UserRecord, 'id' | 'created_at'>): Promise<UserRecord> {
    return this.create<UserRecord>(userData);
  }
}

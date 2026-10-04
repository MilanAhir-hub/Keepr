import { pool } from "../config/db";
import { User, CreateUserInput, UpdateUserInput } from "../types/user.types";

export const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`;

export class UserModel {
  /**
   * Initializes the users table in the PostgreSQL database if it does not exist.
   */
  static async initTable(): Promise<void> {
    await pool.query(createUserTableQuery);
  }

  /**
   * Create a new user record.
   */
  static async create(data: CreateUserInput): Promise<User> {
    const query = `
      INSERT INTO users (name, email, password_hash, avatar_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [
      data.name,
      data.email.toLowerCase().trim(),
      data.password_hash,
      data.avatar_url ?? null,
    ];
    const { rows } = await pool.query<User>(query, values);
    return rows[0]!;
  }

  /**
   * Find a user by email address.
   */
  static async findByEmail(email: string): Promise<User | null> {
    const query = `
      SELECT * FROM users
      WHERE email = $1
      LIMIT 1;
    `;
    const { rows } = await pool.query<User>(query, [email.toLowerCase().trim()]);
    return rows[0] ?? null;
  }

  /**
   * Find a user by primary key ID.
   */
  static async findById(id: string): Promise<User | null> {
    const query = `
      SELECT * FROM users
      WHERE id = $1
      LIMIT 1;
    `;
    const { rows } = await pool.query<User>(query, [id]);
    return rows[0] ?? null;
  }

  /**
   * Update a user's details.
   */
  static async update(id: string, data: UpdateUserInput): Promise<User | null> {
    const fields: string[] = [];
    const values: unknown[] = [];
    let paramIndex = 1;

    if (data.name !== undefined) {
      fields.push(`name = $${paramIndex++}`);
      values.push(data.name);
    }
    if (data.email !== undefined) {
      fields.push(`email = $${paramIndex++}`);
      values.push(data.email.toLowerCase().trim());
    }
    if (data.password_hash !== undefined) {
      fields.push(`password_hash = $${paramIndex++}`);
      values.push(data.password_hash);
    }
    if (data.avatar_url !== undefined) {
      fields.push(`avatar_url = $${paramIndex++}`);
      values.push(data.avatar_url);
    }

    if (fields.length === 0) {
      return this.findById(id);
    }

    fields.push("updated_at = CURRENT_TIMESTAMP");
    values.push(id);

    const query = `
      UPDATE users
      SET ${fields.join(", ")}
      WHERE id = $${paramIndex}
      RETURNING *;
    `;

    const { rows } = await pool.query<User>(query, values);
    return rows[0] ?? null;
  }

  /**
   * Delete a user by ID.
   */
  static async delete(id: string): Promise<boolean> {
    const query = `
      DELETE FROM users
      WHERE id = $1;
    `;
    const result = await pool.query(query, [id]);
    return (result.rowCount ?? 0) > 0;
  }
}

export default UserModel;

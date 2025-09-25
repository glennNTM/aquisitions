import { pgTable, varchar, serial  } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', {length: 255}).notNull(),
  email: varchar('email', {length: 255}).notNull().unique(),
  password: varchar('password', {length: 255}).notNull(),
  role: varchar('role', {length: 50}).notNull().default('user'),
  createdAt: varchar('created_at').notNull(),
  updatedAt: varchar('updated_at').notNull(),
});
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  avatarUrl: text("avatar_url"),
  provider: text('provider').notNull(),
  providerId: text('provider_id').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
})

export const clients = pgTable('clients', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  officialName: varchar('official_name', { length: 100 }).notNull(),
  displayName: varchar('display_name', { length: 100 }).notNull(),
})

export type SelectUsers = typeof users.$inferSelect

export type SelectClients = typeof clients.$inferSelect;
export type InsertClient = typeof clients.$inferInsert

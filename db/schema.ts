import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', {length: 100}).notNull(),
  email: varchar('email', {length: 100}).notNull(),
  avatarUrl: text("avatar_url"),
  provider: text('provider').notNull(),
  providerId: text('provider_id').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
})

export type SelectUsers = typeof users.$inferSelect
import {
  pgTable,
  smallint,
  smallserial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  avatarUrl: text("avatar_url"),
  provider: text("provider").notNull(),
  providerId: text("provider_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const clients = pgTable("clients", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  companyName: varchar("company_name", { length: 150 }).notNull(),
  email: varchar("email", { length: 50 }),
  phone: varchar("phone", { length: 15 }),
  gstNo: varchar("gst_no", { length: 15 }).notNull().unique(),
  website: varchar("website", { length: 50 }).unique(),
  address: varchar("address", { length: 150 }).notNull(),
  city: varchar("city", { length: 50 }).notNull(),
  state: varchar("state", { length: 50 }).notNull(),
  zipCode: varchar("zip_code", { length: 6 }).notNull(),
  status: smallint("status")
    .notNull()
    .references(() => clientStatus.id, { onDelete: "restrict" })
    .default(1),
});

export const paymentStatus = pgTable("payment_status", {
  id: smallserial("id").primaryKey(),
  name: varchar("name", { length: 20 }).notNull().unique(),
  description: varchar("desciption", { length: 100 }),
});

export const clientStatus = pgTable("client_status", {
  id: smallserial("id").primaryKey(),
  name: varchar("name", { length: 20 }).notNull().unique(),
  description: varchar("desciption", { length: 100 }),
});

export type SelectUsers = typeof users.$inferSelect;

export type SelectClients = typeof clients.$inferSelect;
export type InsertClient = typeof clients.$inferInsert;

export type InsertPaymentStatus = typeof paymentStatus.$inferInsert;
export type SelectPaymentStatus = typeof paymentStatus.$inferInsert;

export type InsertClientStatus = typeof clientStatus.$inferInsert;
export type SelectClientStatus = typeof clientStatus.$inferInsert;

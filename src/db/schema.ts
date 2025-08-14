import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const billsTable = pgTable("Bills", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    BillName: varchar("BillName", { length: 100 }).notNull(),
    EarliestDay: integer(),
    LatestDay: integer()
});
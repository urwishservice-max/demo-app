/**
 * Database migration runner — run once after setting DATABASE_URL.
 * Uses the standard 'pg' driver (native TCP) — works in Node.js locally.
 * The app itself uses @neondatabase/serverless (WebSocket/edge) at runtime.
 *
 * Usage (PowerShell):
 *   $env:DATABASE_URL = "postgresql://..."; node src/db/migrate.mjs
 *
 * Safe to run multiple times (uses IF NOT EXISTS).
 */

import pg from "pg"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { join, dirname } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

// Use unpooled URL for migrations (direct connection, not pooled)
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.error("❌  DATABASE_URL is not set.")
  console.error("    PowerShell: $env:DATABASE_URL='postgresql://...'; node src/db/migrate.mjs")
  process.exit(1)
}

const { Pool } = pg
const pool = new Pool({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } })

const migrationPath = join(__dirname, "migrations", "001_create_enquiries_tables.sql")
const migrationSql = readFileSync(migrationPath, "utf8")

console.log("🚀  Running migration: 001_create_enquiries_tables.sql")
console.log("    Database URL:", databaseUrl.replace(/:([^:@]+)@/, ":***@"))

const client = await pool.connect()
try {
  await client.query(migrationSql)
  console.log("✅  Migration complete. Tables created (if they did not already exist).")

  const result = await client.query(
    `SELECT table_name FROM information_schema.tables
     WHERE table_schema = 'public'
       AND table_name IN ('consultation_enquiries', 'contact_enquiries')
     ORDER BY table_name`
  )
  console.log("    Tables verified:", result.rows.map(r => r.table_name).join(", "))
} catch (err) {
  console.error("❌  Migration failed:", err.message)
  process.exit(1)
} finally {
  client.release()
  await pool.end()
}

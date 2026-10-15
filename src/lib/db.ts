/**
 * Neon PostgreSQL connection.
 * Uses @neondatabase/serverless — Neon's recommended driver for Vercel serverless/edge.
 * DATABASE_URL must be the pooled connection string from the Neon dashboard.
 * Never import this file from client components.
 */

import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. Add the Neon pooled connection string to .env.local."
  )
}

/**
 * Tagged-template SQL client — safe, parameterised, Vercel-compatible.
 * Usage: await sql`SELECT * FROM table WHERE id = ${id}`
 */
export const sql = neon(process.env.DATABASE_URL)

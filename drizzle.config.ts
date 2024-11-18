import * as dotenv from 'dotenv'
import { defineConfig } from "drizzle-kit"

dotenv.config()

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:Z0TS4wGYyKli@ep-blue-credit-a5xuvfzn.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
})



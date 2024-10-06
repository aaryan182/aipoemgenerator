import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:B8d2cWFjKyYe@ep-floral-math-a5ff5ro7.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
  verbose: true,
  strict: true,
})
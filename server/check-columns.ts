import { pool } from "./src/config/db";

async function main() {
  const { rows } = await pool.query(
    "SELECT column_name, data_type, column_default FROM information_schema.columns WHERE table_name = 'users'"
  );
  console.log(rows);
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

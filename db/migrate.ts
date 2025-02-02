import dbManager from ".";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  const db = dbManager.getDb;
  try {
    await migrate(db, {
      migrationsFolder: "./db/migrations",
    });
    console.log("Migration successful!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();

import { config } from "dotenv";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";

class DNConnector {
  private sql!: NeonQueryFunction<false, false>;
  private db!: NeonHttpDatabase;
  private isInit: boolean = false;

  private async init(): Promise<void> {
    config({
      path: ".env.local",
    });

    try {
      this.sql = neon(process.env.DATABASE_URL!);
      this.db = drizzle({
        client: this.sql,
      });
      this.isInit = true;
    } catch (err) {
      console.log(
        "Error encountered while estabilishing connection with Neon Postgres.",
      );
      console.error(err);
    }
  }

  get getDb() {
    if (!this.isInit) {
      this.init();
    }
    return this.db;
  }
}

const dbManager = new DNConnector();
export default dbManager;

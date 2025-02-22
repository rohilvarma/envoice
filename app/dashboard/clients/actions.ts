"use server";

import dbManager from "@/db";
import { clients, InsertClient } from "@/db/schema";
import { authConfig } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";
import { NewClient } from "@/zod/newClient.schema";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const fetchClients = async () => {
  const session = await getServerSession(authConfig);
  const allClients = await dbManager.getDb
    .select()
    .from(clients)
    .where(eq(clients.userId, session?.user.id as string));
  return allClients;
};

export const insertClient = async (data: NewClient) => {
  const session = await getServerSession(authConfig);
  const newClientData: InsertClient = {
    ...data,
    userId: session?.user.id as string,
  };
  try {
    await dbManager.getDb.insert(clients).values(newClientData);
    revalidatePath(ROUTES.DASHBOARD.CLIENTS)
    return {success:true}
  } catch (err) {
    console.error("Error encountered while creating a client!", err);
  }
};

"use server";

import dbManager from "@/db";
import { clients, InsertClient } from "@/db/schema";
import { authConfig } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";
import { NewClientInput } from "@/lib/validations/schema";
import { and, eq } from "drizzle-orm";
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

/**
 * Inserts a new client into the database with the current user's ID.
 *
 * @param data - The client data to be inserted.
 * @returns {Promise<{success: boolean, error?: unknown}>} Object indicating operation success or failure
 * - success: boolean indicating if the insertion was successful
 * - error: (optional) contains error information if the operation failed
 */
export const insertClient = async (
  data: NewClientInput,
): Promise<{ success: boolean; error?: unknown }> => {
  const session = await getServerSession(authConfig);
  const newClientData: InsertClient = {
    ...data,
    userId: session?.user.id as string,
  };
  try {
    await dbManager.getDb.insert(clients).values(newClientData);
    revalidatePath(ROUTES.DASHBOARD.CLIENTS.ROOT);
    return { success: true };
  } catch (err) {
    console.error("Error encountered while creating a client!", err);
    return { success: false, error: err };
  }
};

/**
 * Deletes a client from the database with the current user's ID.
 *
 * @param data - The client data to be inserted.
 * @returns {Promise<{success: boolean, error?: unknown}>} Object indicating operation success or failure
 * - success: boolean indicating if the insertion was successful
 * - error: (optional) contains error information if the operation failed
 */
export const deleteClient = async (
  clientId: string,
  userId: string,
): Promise<{ success: boolean; error?: unknown }> => {
  try {
    await dbManager.getDb
      .delete(clients)
      .where(and(eq(clients.id, clientId), eq(clients.userId, userId)));
    revalidatePath(ROUTES.DASHBOARD.CLIENTS.ROOT);
    return { success: true };
  } catch (err) {
    console.error("Error encountered while deleting a client!", err);
    return { success: false, error: err };
  }
};

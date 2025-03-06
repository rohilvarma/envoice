"use server";

import dbManager from "@/db";
import { clients, InsertClient, SelectClients } from "@/db/schema";
import { authConfig } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";
import { NewClientInput } from "@/lib/validations/schema";
import { and, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

type ResponseType = {
  success: boolean;
  error?: unknown;
};

/**
 * Fetches all clients associated with the current user.
 *
 * @returns {Promise<SelectClients[]>} Array of client data
 */
export const fetchClients = async (): Promise<SelectClients[]> => {
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
): Promise<ResponseType> => {
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
): Promise<ResponseType> => {
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

/**
 * Retrieves the name of a client from the database.
 *
 * @param clientId - The ID of the client to retrieve the name for.
 * @returns {Promise<string>} The name of the client.
 */
export const getClientName = async (clientId: string): Promise<string> => {
  try {
    const response = await dbManager.getDb
      .select()
      .from(clients)
      .where(eq(clients.id, clientId));
    return response[0].companyName;
  } catch (err) {
    console.error("Error encountered while fetching client name!", err);
    return clientId;
  }
};

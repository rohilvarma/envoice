import * as z from 'zod'

export const newClient = z.object({
  displayName: z.string().min(2, "Please enter a valid display name for the client company."),
  officialName: z.string().min(4, "Please enter the valid official name of the client's company"),
})

export type NewClient = z.infer<typeof newClient>

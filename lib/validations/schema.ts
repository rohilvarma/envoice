import * as z from "zod";

export const newClientSchema = z.object({
  companyName: z
    .string()
    .min(4, "Please enter a valid company name.")
    .max(150, "Company Name cannot be more than 150 characters"),
  email: z
    .string()
    .email({
      message: "Invalid email address, enter a valid email address",
    })
    .optional(),
  phone: z
    .string()
    .min(10, { message: "Enter a valid phone number" })
    .max(15, { message: "Phone number cannot exceed more than 15 characters." })
    .optional(),
  gstNo: z.string().length(15, { message: "Enter a proper GST IN number." }),
  website: z
    .string()
    .url({ message: "Please enter a valid company URL." })
    .optional(),
  address: z
    .string()
    .min(10, { message: "Enter a proper address" })
    .max(150, { message: "Address cannot exceed 150 characters." }),
  city: z
    .string()
    .min(2, { message: "City name must be atleast 2 characters." })
    .max(50, { message: "City name cannot exceed 50 characters." }),
  state: z
    .string()
    .min(2, { message: "State name must be atleast 2 characters." })
    .max(50, { message: "State name cannot exceed 50 characters." }),
  zipCode: z.string().length(6, { message: "Please enter a valid ZIP Code." }),
});

export type NewClientInput = z.infer<typeof newClientSchema>;

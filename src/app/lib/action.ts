"use server";

import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(2, {message: "Name is required"}),
  email: z.string().email({ message: "Invalid email address" }),
  inputMessage: z.string().min(2, {message: "Message is required"}),
});

const SubmitInquire = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    inputMessage?: string[];
  };
  message?: string;
};

export async function submitInquire(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = SubmitInquire.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    inputMessage: formData.get("message"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Submit Inquire.",
    };
  }

  const { name, email, inputMessage } = validatedFields.data;

  try {
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("inputMessage: ", inputMessage);
    

    
    return { message: "Successfully send message", status: true}
  } catch (error) {
    return { message: "API Error: Failed to Submit Inquire.", status: false};
  }
}

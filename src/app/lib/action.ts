"use server";

import { fetchApi } from "@/fetchers/api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { base_url } from "@/fetchers/api";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  inputMessage: z.string().min(2, { message: "Message is required" }),
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
  console.log(prevState.message?.toString());

  const { name, email, inputMessage } = validatedFields.data;
  const data = {
    name,
    email,
    message: `${prevState?.message} ${inputMessage}`,
  };

  try {
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("inputMessage: ", inputMessage);

    await fetchWithTimeout(`${base_url}/api/enduser/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => Promise.reject(error));
    return { message: "Successfully send message", status: true };
  } catch (error) {
    // return { message: "API Error: Failed to Submit Inquire.", status: false };
    return new Error("Failed to Submit Inquire.");
  }
}

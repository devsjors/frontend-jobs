"use server";

import { createClient } from "@/lib/supabase/server";
import { signupSchema } from "@/schemas/auth/signup";
import { redirect } from "next/navigation";

export const signin = async (formData: FormData) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    return redirect(`/login?error=${error.message}`);
  }

  return redirect("/");
};

export const signup = async (_: unknown, formData: FormData) => {
  const validatedFields = signupSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      success: validatedFields.success,
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
      },
    };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    redirect(`/register?error=${error.message}`);
  }

  redirect("/");
};

export const signOut = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  redirect("/login");
};

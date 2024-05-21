"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    console.error(error);
    return;
  }

  redirect("/");
};

export const signUp = async (formData: FormData) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    console.error(error);
    return;
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

  redirect("/");
};

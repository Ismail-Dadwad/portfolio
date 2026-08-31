"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GATE_COOKIE, GATE_PASSWORD } from "@/lib/auth";

export async function unlockCaseStudy(slug: string, formData: FormData) {
  const password = formData.get("password")?.toString() ?? "";

  if (password !== GATE_PASSWORD) {
    redirect(`/work/${slug}?error=1`);
  }

  (await cookies()).set(GATE_COOKIE, GATE_PASSWORD, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(`/work/${slug}`);
}

"use server";

export async function loginAction(_state: any, formData: FormData) {
  try {
    // sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const username = formData.get("username") as string;
    const password = formData.get("username") as string;
    console.log("Login:", username, password);
    if (username !== "admin" || password !== "admin") {
      throw new Error("Invalid username or password");
    }
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

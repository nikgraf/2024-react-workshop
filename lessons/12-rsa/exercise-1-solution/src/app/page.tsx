export default async function Page() {
  const loginAction = async (formData: FormData) => {
    "use server";

    try {
      const username = formData.get("username") as string;
      const password = formData.get("username") as string;
      console.log("Login:", username, password);
      if (username !== "admin" || password !== "admin") {
        throw new Error("Invalid username or password");
      }
      // here you could redirect to the app homepage
    } catch (error) {
      console.error(error);
      // here you could redirect to the login page with an error info in the URL 🤷
    }
  };

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <form action={loginAction}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

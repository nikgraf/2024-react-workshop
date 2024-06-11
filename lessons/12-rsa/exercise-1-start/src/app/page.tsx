export default async function Page() {
  const loginAction = async () => {};

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <form>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

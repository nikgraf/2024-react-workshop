"use client";

type Props = {};

export const Login: React.FC<Props> = () => {
  return (
    <form>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};
